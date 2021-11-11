import { Color, Tween, tween, Vec3, _decorator } from 'cc';
import { resolve } from 'dns';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEntityControllerBase } from '../../../Base/FYFramework/Entity/FYEntityControllerBase';
import FYLog from '../../../Base/FYFramework/Log/FYLog';
import { FYPoolBase } from '../../../Base/FYFramework/Pool/FYPoolBase';
import GConst2048Go from '../../Define/GConst2048Go';
import { GEnum2048Go } from '../../Define/GEnum2048Go';
import G2048GoUtility from '../../Utility/G2048GoUtility';
import { UIGame2048GoBlockModel } from './UIGame2048GoBlockModel';
import { UIGame2048GoBlockView } from './UIGame2048GoBlockView';
const { ccclass, property } = _decorator;


@ccclass('UIGame2048GoBlock')
export class UIGame2048GoBlock extends FYEntityControllerBase implements FYPoolBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_Entity_UIGame2048GoBlock';
    /** 预制名 给实例调用 */
    public prefabName = 'P_Entity_UIGame2048GoBlock';

    public model: UIGame2048GoBlockModel = undefined;
    public view: UIGame2048GoBlockView = undefined;
    /** 方块下落速度 */
    private _dropSpeed: number = 3000;

    reset(): void {
        this.model.reset();
        this.view.cNodeSprite.color = Color.WHITE;
        this.node.parent = null;
    }
    clear(): void {
        this.node.destroy();
    }
    check(): boolean {
        return this.node != null && this.node.isValid;
    }

    /**
     * 生成数值
     */
    public genValue() {
        let randomValue = Math.random();
        let blockValue = 2;
        if (randomValue < 0.3) {
            blockValue = 4;
        } else if (randomValue < 0.55) {
            blockValue = 8;
        } else if (randomValue < 0.65) {
            blockValue = 16;
        } else if (randomValue < 0.7) {
            blockValue = 32;
        }

        this.model.blockValue = blockValue;
    }

    /**
     * 设置方块数值
     * @param v 数值
     */
    public setValue(v: number) {
        this.model.blockValue = v;
    }

    /**
     * 下落
     * @param indexX 横坐标索引
     * @param indexY 纵坐标索引
     */
    public drop(indexX: number, indexY: number) {
        if (!G2048GoUtility.checkBlockIndexY(indexY)) {
            FYLog.error(`drop indexY error, indexY = ${indexY}, this block indexX = ${this.model.indexX}, indexY = ${this.model.indexY}, blockValue = ${this.model.blockValue}`);
            return;
        }

        this.model.indexX = indexX;
        this.model.indexY = indexY;
        this.playDropAnim(indexY);
    }

    /**
     * 合并
     * @param worldPosition 目标方块的世界坐标
     */
    public merge(worldPosition: Vec3) {
        this.model.isMerge = true;
        this.model.isPlayingAnim = true;
        this.playMergeAnim(worldPosition);
    }

    /** 播放下落动画 */
    private playDropAnim(indexY: number) {
        this.model.isDrop = true;
        this.model.isPlayingAnim = true;
        // 这个坐标是从底部往上的坐标
        let targetPosY = G2048GoUtility.calcBlockPositionY(indexY);
        // 起始位置
        let startPosY = 0;
        if (this.model.preIndexY === 0) {
            startPosY = GConst2048Go.BLOCK_POSITION_Y_MAX + GConst2048Go.BLOCK_SIDE_LENGTH;
        } else {
            startPosY = G2048GoUtility.calcBlockPositionY(this.model.preIndexY);
        }
        this.node.position = new Vec3(0, startPosY, 0);

        // 这里要计算从顶部下落的路程，所以要用总路程减一次
        let distance = startPosY - targetPosY;
        // 掉落所需时间
        let duration = distance / this._dropSpeed;

        Tween.stopAllByTarget(this.node);
        tween(this.node).to(duration, { position: new Vec3(0, targetPosY, 0) }, { easing: "linear" }).call(() => {
            this.model.isDrop = false;
            this.model.isPlayingAnim = false;
            FY.event.emit(GEnum2048Go.Event.DropAnimComplete);
        }).start();
    }

    /** 播放合并动画 */
    private playMergeAnim(worldPosition: Vec3) {
        tween(this.node).to(0.1, { 'worldPosition': worldPosition }).call(() => {
            this.node.active = false;
            this.model.isPlayingAnim = false;
            FY.event.emit(GEnum2048Go.Event.MergeAnimComplete);
        }).start();
    }
}