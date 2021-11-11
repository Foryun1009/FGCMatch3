import { Color, Label, math, resources, Sprite, SpriteFrame, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYEntityModelBase } from '../../../Base/FYFramework/Entity/FYEntityModelBase';
import { ConfigColor } from '../../Config/ConfigColor';
import { ConfigSoftColor } from '../../Config/ConfigSoftColor';
import GConst2048Go from '../../Define/GConst2048Go';
const { ccclass, property } = _decorator;


@ccclass('UIGame2048GoBlockModel')
export class UIGame2048GoBlockModel extends FYEntityModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_Entity_UIGame2048GoBlock';
    /** 预制名 给实例调用 */
    public prefabName = 'P_Entity_UIGame2048GoBlock';

    private _blockValue: number = 0;
    public get blockValue(): number {
        return this._blockValue;
    }
    /** 方块的数值 */
    public set blockValue(v: number) {
        if (this._blockValue === v || v > GConst2048Go.BLOCK_VALUE_MAX || v < GConst2048Go.BLOCK_VALUE_MIN) {
            return;
        }
        this._blockValue = v;
        // 改变数值，和颜色
        this.emit(FYEnum.Event.ChangeViewValue, 'cValueLabel', (cValueLabel: Label) => {
            cValueLabel.string = this._blockValue.toString();
            let index = Math.log2(this._blockValue) - 1;
            let color = new Color().fromHEX(ConfigColor[index % ConfigColor.length]);
            cValueLabel.color = color;
        });
        // 改变方块
        this.emit(FYEnum.Event.ChangeViewValue, 'cNodeSprite', async (cNodeSprite: Sprite) => {
            let index = Math.log2(this._blockValue) - 1;
            cNodeSprite.spriteFrame = await FY.resource.load<SpriteFrame>(`T_Block_${index % ConfigColor.length + 1}`, 'spriteFrame');
        });
    }
    /** 方块上一次的横向索引 */
    public preIndexX: number = 0;
    /** 方块上一次的纵向索引 */
    public preIndexY: number = 0;

    private _indexX: number = 0
    /** 方块所在的横向索引 在哪个区域 */
    public set indexX(v: number) {
        if (this._indexX === v) {
            return;
        }

        this.preIndexX = this._indexX;
        this._indexX = v;
    }
    public get indexX() {
        return this._indexX;
    }

    private _indexY: number = 0;
    /** 方块所在的纵向缩影 在区域的哪个位置 */
    public set indexY(v: number) {
        if (this._indexY === v) {
            return;
        }

        this.preIndexY = this._indexY;
        this._indexY = v;
    }
    public get indexY() {
        return this._indexY;
    }

    /** 是否要下落 */
    public isDrop: boolean = false;
    /** 是否要合并 */
    public isMerge: boolean = false;
    /** 是否正在播放动画 播放动画的物体不参与计算 */
    public isPlayingAnim: boolean = false;

    public reset() {
        this._blockValue = 0;
        this.preIndexX = 0;
        this.preIndexY = 0;
        this._indexX = 0;
        this._indexY = 0;
        this.isDrop = false;
        this.isMerge = false;
        this.isPlayingAnim = false;
    }
}