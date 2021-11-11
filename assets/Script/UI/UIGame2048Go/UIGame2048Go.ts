import { Button, Node, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import FYLog from '../../../Base/FYFramework/Log/FYLog';
import { FYPool } from '../../../Base/FYFramework/Pool/FYPool';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import GConst2048Go from '../../Define/GConst2048Go';
import { GEnum } from '../../Define/GEnum';
import { GEnum2048Go } from '../../Define/GEnum2048Go';
import { UIGame2048GoBlock } from '../../Entity/UIGame2048GoBlock/UIGame2048GoBlock';
import Session from '../../Session/Session';
import G2048GoUtility from '../../Utility/G2048GoUtility';
import { UIDiamondNoEnough } from '../UIDiamondNoEnough/UIDiamondNoEnough';
import { UIPause } from '../UIPause/UIPause';
import { UIResult } from '../UIResult/UIResult';
import { UISelectedDice } from '../UISelectedDice/UISelectedDice';
import { UISetting } from '../UISetting/UISetting';
import { UITips } from '../UITips/UITips';
import UIGame2048GoMergeInfo from './UIGame2048GoMergeInfo';
import { UIGame2048GoModel } from './UIGame2048GoModel';
import { UIGame2048GoView } from './UIGame2048GoView';
const { ccclass, property } = _decorator;


@ccclass('UIGame2048Go')
export class UIGame2048Go extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIGame2048Go';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIGame2048Go';

    public model: UIGame2048GoModel = undefined;
    public view: UIGame2048GoView = undefined;
    /** 方块对象，实例化的模板 */
    private _blockSample: Node = undefined;
    /** 方块对象池 */
    private _blockPool: FYPool<UIGame2048GoBlock> = undefined;
    /** 方块列表 一维数组下标是indexX 二维数组下标是indexY */
    private _blockList: Array<Array<UIGame2048GoBlock>> = new Array<Array<UIGame2048GoBlock>>();
    /** 方块合并信息字典 */
    private _blockMergeInfoDict: { [key: string]: UIGame2048GoMergeInfo } = undefined;
    /** 下落的方块列表 */
    private _blockDropList: Array<UIGame2048GoBlock> = new Array<UIGame2048GoBlock>();
    /** 正在播放动画的数量 */
    private _playingAnimNum: number = 0;
    /** 动画播放完毕计数 */
    private _animCompleteCount: number = 0;
    /** 是否可以生成方块 */
    private _canGenBlock: boolean = true;
    /** 下个方块数值 */
    private _nextBlockValue: number = 0;

    //#region ==================== 游戏逻辑 ====================

    /** 预加载 */
    private async preLoad() {
        this._blockSample = (await FY.entity.getEntity(UIGame2048GoBlock, null)).node;
    }

    /** 重置数据 */
    private reset() {
        this.model.reset();
        this._blockPool.putAll();
        for (let i = 0; i < GConst2048Go.BLOCK_COL_NUM_MAX; i++) {
            this._blockList[i] = [];
        }
        this._blockMergeInfoDict = {};
        this._blockDropList = [];
        this._playingAnimNum = 0;
        this._animCompleteCount = 0;
        this._canGenBlock = true;

        this.model.init();
    }

    private initData() {
        // 构建对象池
        this._blockPool = new FYPool(() => {
            return FY.entity.instantiateEntity(UIGame2048GoBlock, this._blockSample, this.view.cBlockPool);
        });

        // 初始化列表
        for (let i = 0; i < GConst2048Go.BLOCK_COL_NUM_MAX; i++) {
            this._blockList.push(new Array<UIGame2048GoBlock>());
        }

        this._blockMergeInfoDict = Object.create(null);

        this.model.init();

        this.genBlockValue();
    }

    private addEvent() {
        this.on(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);

        FY.event.on(GEnum2048Go.Event.DropAnimComplete, this.onDropAnimComplete, this);
        FY.event.on(GEnum2048Go.Event.MergeAnimComplete, this.onMergeAnimComplete, this);

        FY.event.on(GEnum.GameEvent.Again, this.onAgain, this);
        FY.event.on(GEnum.GameEvent.Revive, this.onRevive, this);
        FY.event.on(GEnum2048Go.Event.PropSelectBlock, this.onPropSelectBlock, this);
        FY.event.on(GEnum.GameEvent.DiamondNumChanged, this.onDiamondNumChanged, this);
    }

    private removeEvent() {
        this.off(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);

        FY.event.off(GEnum2048Go.Event.DropAnimComplete, this.onDropAnimComplete, this);
        FY.event.off(GEnum2048Go.Event.MergeAnimComplete, this.onMergeAnimComplete, this);

        FY.event.off(GEnum.GameEvent.Again, this.onAgain, this);
        FY.event.off(GEnum.GameEvent.Revive, this.onRevive, this);
        FY.event.off(GEnum2048Go.Event.PropSelectBlock, this.onPropSelectBlock, this);
        FY.event.off(GEnum.GameEvent.DiamondNumChanged, this.onDiamondNumChanged, this);
    }

    /**
     * 生成方块数值
     * @returns 
     */
    private genBlockValue(): void {
        let randomValue = Math.random();
        let blockValue = 2;
        if (randomValue < 0.3) {
            blockValue = 4;
        } 
        // else if (randomValue < 0.55) {
        //     blockValue = 8;
        // } else if (randomValue < 0.65) {
        //     blockValue = 16;
        // } else if (randomValue < 0.7) {
        //     blockValue = 32;
        // }

        this.model.nextBlockValue = blockValue;
    }

    /**
     * 获取方块
     * @param parent 父对象
     * @returns 
     */
    private getBlock(parent: Node): UIGame2048GoBlock {
        let block = this._blockPool.get();
        block.node.active = true;
        block.node.parent = parent;
        return block;
    }

    /**
     * 生成方块
     * @param parent 父对象
     * @param indexX 横坐标索引
     * @param indexY 纵坐标索引
     */
    private genBlock(parent: Node, indexX: number, indexY: number) {
        if (!G2048GoUtility.checkBlockIndexX(indexX) || !G2048GoUtility.checkBlockIndexY(indexY) || !this._canGenBlock) {
            return;
        }

        this._canGenBlock = false;

        let block = this.getBlock(parent);
        block.setValue(this.model.nextBlockValue);
        block.drop(indexX, indexY);
        this._blockDropList.push(block);
        this._playingAnimNum++;
        this._blockList[indexX].push(block);

        this.genBlockValue();
        // FYLog.log('生成方块');
    }

    /**
     * 获取下一个空的纵坐标索引
     * @param indexX 方块横坐标索引
     * @returns 
     */
    private getNextEmptyIndexY(indexX: number): number {
        if (!G2048GoUtility.checkBlockIndexX(indexX)) {
            return -1;
        }

        let len = this._blockList[indexX].length;
        if (len >= GConst2048Go.BLOCK_ROW_NUM_MAX) {
            return -1
        }

        return len;
    }

    /**
     * 获取方块合并信息字典关键字
     * @param indexX 横坐标索引
     * @param indexY 纵坐标索引
     * @returns 
     */
    private getBlockMergeInfoDictKey(indexX: number, indexY: number): string {
        return `${indexX}_${indexY}`;
    }

    /**
     * 按方向校验合并
     * @param indexX 横坐标索引
     * @param indexY 纵坐标索引
     * @param direction 查找方向
     * @returns 
     */
    private checkMergeDirection(indexX: number, indexY: number, direction: GEnum2048Go.Direction): boolean {
        // 是否有合并
        let needMerge = false;
        // 方块
        let block: UIGame2048GoBlock = this._blockList[indexX][indexY]
        if (!block) {
            return false;
        }

        let startIndex = undefined;
        let checkFunc = undefined;
        let deltaFunc = undefined;
        let getBlockFunc = undefined;
        if (direction === GEnum2048Go.Direction.Top) {
            startIndex = indexY + 1;
            checkFunc = (i) => { return i < GConst2048Go.BLOCK_ROW_NUM_MAX; }
            deltaFunc = (i) => { return i + 1; }
            getBlockFunc = (i) => { return this._blockList[indexX][i]; }
        } else if (direction === GEnum2048Go.Direction.Bottom) {
            startIndex = indexY - 1;
            checkFunc = (i) => { return i >= 0; }
            deltaFunc = (i) => { return i - 1; }
            getBlockFunc = (i) => { return this._blockList[indexX][i]; }
        } else if (direction === GEnum2048Go.Direction.Left) {
            startIndex = indexX - 1;
            checkFunc = (i) => { return i >= 0; }
            deltaFunc = (i) => { return i - 1; }
            getBlockFunc = (i) => { return this._blockList[i][indexY]; }
        } else {
            startIndex = indexX + 1;
            checkFunc = (i) => { return i < GConst2048Go.BLOCK_COL_NUM_MAX; }
            deltaFunc = (i) => { return i + 1; }
            getBlockFunc = (i) => { return this._blockList[i][indexY]; }
        }

        for (let i = startIndex; checkFunc(i); i = deltaFunc(i)) {
            let checkBlock = getBlockFunc(i);
            // 如果相连接的方块为空，或者数值不同，则不用继续查找
            if (!checkBlock || checkBlock.model.blockValue != block.model.blockValue) {
                break;
            }

            let key = this.getBlockMergeInfoDictKey(indexX, indexY);
            let blockMergeInfo = this._blockMergeInfoDict[key];
            if (!blockMergeInfo) {
                blockMergeInfo = new UIGame2048GoMergeInfo();
                blockMergeInfo.targetBlock = block;
            }

            blockMergeInfo.mergeList.push(checkBlock);
            this._blockMergeInfoDict[key] = blockMergeInfo;
            needMerge = true;
        }

        return needMerge;
    }

    /**
     * 校验合并
     * @param indexX 横坐标索引
     * @param indexY 纵坐标索引
     * @returns 
     */
    private checkMerge(indexX: number, indexY: number): boolean {
        // 是否有合并
        let needMerge = false;
        if (!G2048GoUtility.checkBlockIndexX(indexX) || !G2048GoUtility.checkBlockIndexY(indexY)) {
            return false;
        }

        let needMergeTop = this.checkMergeDirection(indexX, indexY, GEnum2048Go.Direction.Top);
        let needMergeBottom = this.checkMergeDirection(indexX, indexY, GEnum2048Go.Direction.Bottom);
        let needMergeLeft = this.checkMergeDirection(indexX, indexY, GEnum2048Go.Direction.Left);
        let needMergeRight = this.checkMergeDirection(indexX, indexY, GEnum2048Go.Direction.Right);

        needMerge = needMergeTop || needMergeBottom || needMergeLeft || needMergeRight;

        this.doMerge();

        return needMerge;
    }

    /**
     * 校验所以方块是否要合并
     */
    private checkAllMerge(): boolean {
        // 是否有合并
        let needMerge = false;
        let len = this._blockList.length;
        for (let i = 0; i < len; i++) {
            let blockList = this._blockList[i];
            let len2 = blockList.length;
            for (let j = 0; j < len2; j++) {
                let block = blockList[j];
                if (block.model.isMerge) {
                    continue;
                }

                needMerge = needMerge || this.checkMerge(block.model.indexX, block.model.indexY);
            }
        }

        return needMerge;
    }

    /**
     * 执行合并
     */
    private doMerge() {
        for (let key in this._blockMergeInfoDict) {
            let blockMergeInfo = this._blockMergeInfoDict[key];
            if (!blockMergeInfo) {
                continue;
            }

            let blockTarget = blockMergeInfo.targetBlock;
            let len = blockMergeInfo.mergeList.length;
            for (let i = 0; i < len; i++) {
                let blockMerge = blockMergeInfo.mergeList[i];
                blockMerge.merge(blockTarget.node.worldPosition);
                this._playingAnimNum++;
            }
        }
    }

    /** 校验下落的方块是否要合并 */
    private checkDropBlockMerge(): boolean {
        // 是否有合并
        let needMerge = false;
        let len = this._blockDropList.length;
        for (let i = 0; i < len; i++) {
            let block = this._blockDropList[i];
            if (block.model.isMerge) {
                continue;
            }

            needMerge = needMerge || this.checkMerge(block.model.indexX, block.model.indexY);

        }

        this._blockDropList = [];
        return needMerge;
    }

    /**
     * 销毁方块 把方块从列表中移除，并放入对象池中
     * @param indexX 横坐标索引
     * @param block 要销毁的方块
     * @returns 
     */
    private destroyBlock(indexX: number, block: UIGame2048GoBlock) {
        if (!block) {
            return;
        }

        this._blockList[indexX].remove(block);
        this._blockPool.put(block);
    }

    /**
     * 销毁所有合并了的方块
     * @returns 
     */
    private destroyAllMergeBlock() {
        for (let key in this._blockMergeInfoDict) {
            let blockMergeInfo = this._blockMergeInfoDict[key];
            if (!blockMergeInfo) {
                FYLog.error(`blockMergeInfo is null, key = ${key}`);
                return;
            }

            let len = blockMergeInfo.mergeList.length;
            for (let i = 0; i < len; i++) {
                let blockMerge = blockMergeInfo.mergeList[i];
                this.destroyBlock(blockMerge.model.indexX, blockMerge);
            }
        }

        // 合并流程处理完，清空合并信息字典
        this._blockMergeInfoDict = Object.create(null);
        // FYLog.log('销毁合并方块完毕');
    }

    /**
     * 消除一组方块
     * @param blockList 方块列表
     */
    private eliminateBlocks(blockList: Array<UIGame2048GoBlock>) {
        let len = blockList.length;
        for (let i = 0; i < len; i++) {
            let block = blockList[i];
            block.model.isMerge = true;
            block.node.active = false;
            // 消除处理 比较特殊 target和合并列表都是自己
            let key = this.getBlockMergeInfoDictKey(block.model.indexX, block.model.indexY);
            let blockMergeInfo = this._blockMergeInfoDict[key];
            if (!blockMergeInfo) {
                blockMergeInfo = new UIGame2048GoMergeInfo();
                blockMergeInfo.targetBlock = block;
            }

            blockMergeInfo.mergeList.push(block);
            this._blockMergeInfoDict[key] = blockMergeInfo;
        }

        if (!this.checkAllDrop()) {
            // 如果没有需要下落的，则自行销毁方块，并激活游戏
            this.destroyAllMergeBlock();
            this._canGenBlock = true;
        }
    }

    /**
     * 校验所有方块是否下落
     * @returns 
     */
    private checkAllDrop(): boolean {
        // 需要下落
        let needDrop = false;
        let len = this._blockList.length;
        for (let i = 0; i < len; i++) {
            let len2 = this._blockList[i].length;
            // 下落索引偏移值
            let indexDeltaY = 0;
            for (let j = 0; j < len2; j++) {
                let block = this._blockList[i][j];
                if (block.model.isMerge) {
                    // 这个方块被合并了
                    indexDeltaY++;
                } else if (indexDeltaY > 0) {
                    // 如果这个方块没有被合并，但是下方有方块被合并了，则要下落
                    block.drop(block.model.indexX, block.model.indexY - indexDeltaY);
                    this._blockDropList.push(block);
                    this._playingAnimNum++;
                    needDrop = true;
                }
            }
        }
        return needDrop;
    }

    /** 校验动画播放完毕 */
    private checkAnimComplete() {
        if (this._playingAnimNum === this._animCompleteCount) {
            this._playingAnimNum = 0;
            this._animCompleteCount = 0;
            return true;
        }

        return false;
    }

    /** 计算方块的数值 */
    private calcBlockValue() {
        for (let key in this._blockMergeInfoDict) {
            let blockMergeInfo = this._blockMergeInfoDict[key];
            let len = blockMergeInfo.mergeList.length;

            let targetNumber = blockMergeInfo.targetBlock.model.blockValue * Math.pow(2, len);
            if (targetNumber > GConst2048Go.BLOCK_VALUE_MAX) {
                // 生成的方块数值大于最大值，则被销毁
                blockMergeInfo.targetBlock.model.isMerge = true;
                blockMergeInfo.targetBlock.node.active = false;
                blockMergeInfo.mergeList.push(blockMergeInfo.targetBlock);
            } else {
                blockMergeInfo.targetBlock.model.blockValue = targetNumber;
            }

            this.model.score += targetNumber;
            Session.diamond += Math.floor(Math.log2(targetNumber) / 5);

            // 播放合并音效
            if (targetNumber >= 4 && targetNumber <= 8192) {
                FY.audio.play('A_Sound_G2048Go_Merge' + targetNumber, GEnum.AudioGroupType.Sound, false);
                FY.device.vibrateShort();
            }
        }
    }

    //#endregion

    //#region ==================== 生命周期 ====================

    async onLoad() {
        if (super.onLoad) {
            super.onLoad();
        }

        await this.preLoad();
        this.initData();
    }

    start() {
        if (super.start) {
            super.start();
        }
    }

    onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }

        this.addEvent();
    }

    onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }

        this.removeEvent();
    }

    //#endregion

    //#region ==================== 回调函数 ====================

    /**
     * 点击区域回调
     * @param component 点击的区域对象
     * @returns 
     */
    private async onTouchArea(component: Button) {
        if (!this._canGenBlock) {
            return;
        }

        let indexX = Number(component.name.replace(/[^\d]/g, ' ')) - 1;
        let indexY = this.getNextEmptyIndexY(indexX);
        if (indexY < 0) {
            // 游戏结束
            this._canGenBlock = false;
            (await FY.ui.open(UIResult)).setData(this.model.score);
            return;
        }

        this.genBlock(component.node, indexX, indexY);
        // 播放下落音效
        FY.audio.play('A_Sound_G2048Go_BlockDrop', GEnum.AudioGroupType.Sound, false);
        FY.device.vibrateShort();
    }

    /**
     * 
     * @param eventType 事件类型
     * @param component 触发事件的组件
     */
    private async onButtonClick(eventType: string, component: Button) {
        // FYLog.log(`点击了 ${component.name}`);
        switch (component.name) {
            case this.view.cBombButton.name:

                break;
            case this.view.cDiceButton.name:
                if (Session.diamond < 200) {
                    (await FY.ui.open(UITips)).show('钻石不够');
                    return;
                }
                FY.ui.open(UISelectedDice);
                break;
            case this.view.cHelpButton.name:

                break;
            case this.view.cExchangeButton.name:

                break;
            case this.view.cSettingButton.name:
                FY.ui.open(UIPause);
                break;
            case this.view.cDiamondAddButton.name:
                FY.ui.open(UIDiamondNoEnough);
                break;
            default:
                let reg: RegExp = /_TouchArea\d+_<Button>/g;
                if (reg.test(component.name)) {
                    this.onTouchArea(component);
                }
                break;
        }
    }

    /**
     * 掉落动画完成回调
     * @param msgType 消息类型
     */
    private onDropAnimComplete(msgType: string) {
        this._animCompleteCount++;
        if (this.checkAnimComplete()) {
            // FYLog.log('所有下落动画播放完毕');
            // 合并校验之前一定要清掉之前合并的方块
            this.destroyAllMergeBlock();
            if (!this.checkAllMerge()) {
                // FYLog.log('没有方块要合并');
                // 如果下落万，没有需要合并的，则可以生成新方块了
                this._canGenBlock = true;
            }
        }
    }

    /**
     * 合并动画完成回调
     * @param msgType 消息类型
     */
    private onMergeAnimComplete(msgType: string) {
        this._animCompleteCount++;
        if (this.checkAnimComplete()) {
            // FYLog.log('所有合并动画播放完毕');
            // 合并动画播放完毕，数值累计到目标方块
            this.calcBlockValue();
            // FYLog.log('方块数值累计完毕');
            if (!this.checkAllDrop()) {
                // FYLog.log('没有方块要掉落');
                // 合并完成后，等下落校验完毕，才能销毁合并的方块
                this.destroyAllMergeBlock();
                // 如果合并完，没有要下落的，则合并的是最顶上的一层，再校验一次合并
                if (!this.checkAllMerge()) {
                    // FYLog.log('没有方块要合并');
                    // 如果没有要合并的，则可以生成新方块了
                    this._canGenBlock = true;
                }
            }
        }
    }

    /**
     * 重来一局回调
     */
    private onAgain() {
        this.reset();
    }

    /**
     * 复活回调
     */
    private onRevive() {
        // 把最上面三层销毁
        let listBlock: Array<UIGame2048GoBlock> = [];
        let len = this._blockList.length;
        for (let i = 0; i < len; i++) {
            for (let j = GConst2048Go.BLOCK_ROW_NUM_MAX - 3; j < GConst2048Go.BLOCK_ROW_NUM_MAX; j++) {
                let block = this._blockList[i][j];
                if (block) {
                    listBlock.push(block);
                }
            }
        }

        this.eliminateBlocks(listBlock);
    }

    /**
     * 回调 道具 选择方块
     * @param msgType 消息类型
     * @param blockValue 方块数值
     */
    private onPropSelectBlock(msgType, blockValue) {
        this.model.nextBlockValue = blockValue;
    }

    /**
     * 回调 钻石数量发生变化
     * @param msgType 消息类型
     * @param diamondNum 钻石数量
     */
    private onDiamondNumChanged(msgType, diamondNum) {
        this.model.diamond = diamondNum;
    }

    //#endregion
}