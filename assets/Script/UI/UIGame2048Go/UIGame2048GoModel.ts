import { Color, Label, Sprite, SpriteFrame, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIModelBase } from '../../../Base/FYFramework/UI/FYUIModelBase';
import { ConfigColor } from '../../Config/ConfigColor';
import { ConfigSoftColor } from '../../Config/ConfigSoftColor';
import { GEnum } from '../../Define/GEnum';
import Session from '../../Session/Session';
const { ccclass, property } = _decorator;


@ccclass('UIGame2048GoModel')
export class UIGame2048GoModel extends FYUIModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIGame2048Go';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIGame2048Go';

    /** 初始化 将model数据同步到view */
    public init() {
        this.score = 0;
        this.diamond = Session.diamond;

        this.emit(FYEnum.Event.ChangeViewValue, 'cBestScoreLabel', (cBestScoreLabel: Label) => {
            cBestScoreLabel.string = this.bestScore.toString();
        });
    }

    /** 重置数据 */
    public reset() {
        this.score = 0;
        this._bestScore = -1;
    }

    private _score: number = -1;
    /** 分数 */
    public get score() {
        return this._score;
    }
    public set score(v: number) {
        if (this._score === v) {
            return;
        }

        this._score = v;
        // 改变数值
        this.emit(FYEnum.Event.ChangeViewValue, 'cScoreLabel', (cScoreLabel: Label) => {
            cScoreLabel.string = this._score.toString();
        });
    }

    private _bestScore: number = -1;
    public get bestScore() {
        if (this._bestScore === -1) {
            if (Session.selectedGameMode === GEnum.GameMode.Infinite) {
                let gameData = Session.gameData.getInfiniteModeGameData(Session.selectedGameType);
                if (!gameData) {
                    this._bestScore = 0;
                } else {
                    this._bestScore = gameData.score;
                }
            } else {
                // TODO 其他模式
            }

        }
        return this._bestScore;
    }

    private _nextBlockValue: number = 0;
    public set nextBlockValue(v: number) {
        if (this._nextBlockValue === v) {
            return;
        }
        this._nextBlockValue = v;
        // 改变数值
        this.emit(FYEnum.Event.ChangeViewValue, 'cNextBlockValueLabel', (cNextBlockValueLabel: Label) => {
            cNextBlockValueLabel.string = this._nextBlockValue.toString();
            let index = Math.log2(this._nextBlockValue) - 1;
            let color = new Color().fromHEX(ConfigColor[index]);
            cNextBlockValueLabel.color = color;
        });
        // 改变颜色
        this.emit(FYEnum.Event.ChangeViewValue, 'cNextBlockSprite', async (cNextBlockSprite: Sprite) => {
            let index = Math.log2(this._nextBlockValue);
            cNextBlockSprite.spriteFrame = await FY.resource.load<SpriteFrame>(`T_Block_${index}`, 'spriteFrame');
        });
    }
    public get nextBlockValue() {
        return this._nextBlockValue;
    }

    private _diamond: number = -1;
    /** 钻石 */
    public get diamond() {
        return this._diamond;
    }
    public set diamond(v: number) {
        if (this._diamond === v) {
            return;
        }

        this._diamond = v;
        // 改变数值
        this.emit(FYEnum.Event.ChangeViewValue, 'cDiamondLabel', (cDiamondLabel: Label) => {
            cDiamondLabel.string = this._diamond.toString();
        });
    }
}