import { Label, _decorator } from 'cc';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIModelBase } from '../../../Base/FYFramework/UI/FYUIModelBase';
import { GEnum } from '../../Define/GEnum';
import Session from '../../Session/Session';
const { ccclass, property } = _decorator;


@ccclass('UIResultModel')
export class UIResultModel extends FYUIModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIResult';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIResult';

    private _score: number = 0;
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

        let score = Session.gameData.getInfiniteModeGameData(Session.selectedGameType).score
        this.emit(FYEnum.Event.ChangeViewValue, 'cBestScoreLabel', (cBestScoreLabel: Label) => {
            cBestScoreLabel.string = score.toString();
        });

        if (Session.selectedGameMode === GEnum.GameMode.Infinite) {
            if (Session.gameData.setInfiniteModeScore(Session.selectedGameType, this._score)) {
                Session.saveGameData();
            }
        } else {
            // TODO 其他模式
        }
    }
}