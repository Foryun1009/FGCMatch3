import { _decorator } from 'cc';
import { FYEntityControllerBase } from '../../../Base/FYFramework/Entity/FYEntityControllerBase';
import { TGameConfigInfo } from '../../Config/ConfigGame';
import { MenuPageViewItemModel } from './MenuPageViewItemModel';
import { MenuPageViewItemView } from './MenuPageViewItemView';
const { ccclass, property } = _decorator;


@ccclass('MenuPageViewItem')
export class MenuPageViewItem extends FYEntityControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_Entity_MenuPageViewItem';
    /** 预制名 给实例调用 */
    public prefabName = 'P_Entity_MenuPageViewItem';

    public model: MenuPageViewItemModel = undefined;
    public view: MenuPageViewItemView = undefined;

    /** 游戏信息 */
    private _gameConfigInfo: TGameConfigInfo = undefined;

    public setData(data: TGameConfigInfo) {
        this._gameConfigInfo = data;

        this.initData();
    }

    public getGameConfigInfo(): TGameConfigInfo {
        return this._gameConfigInfo;
    }

    private initData() {
        this.view.cGameNameLabel.string = this._gameConfigInfo.name;
    }
}