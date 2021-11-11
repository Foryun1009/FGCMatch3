import { Label, _decorator } from 'cc';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIModelBase } from '../../../Base/FYFramework/UI/FYUIModelBase';
import { GEnum } from '../../Define/GEnum';
import Session from '../../Session/Session';
const { ccclass, property } = _decorator;


@ccclass('UIMenuModel')
export class UIMenuModel extends FYUIModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIMenu';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIMenu';

    public init() {
        this.diamond = Session.diamond;

        this.emit(FYEnum.Event.ChangeViewValue, 'cBestScoreLabel', (cBestScoreLabel: Label) => {
            cBestScoreLabel.string = this.bestScore.toString();
        });
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

    private _bestScore: number = -1;
    public get bestScore() {
        if (this._bestScore === -1) {
            // if (Session.selectedGameMode === GEnum.GameMode.Infinite) {
                let gameData = Session.gameData.getInfiniteModeGameData(GEnum.GameType.G2048Go);
                if (!gameData) {
                    this._bestScore = 0;
                } else {
                    this._bestScore = gameData.score;
                }
            // } else {
            //     // TODO 其他模式
            // }

        }
        return this._bestScore;
    }
}