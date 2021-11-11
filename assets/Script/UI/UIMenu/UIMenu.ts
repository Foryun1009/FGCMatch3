import { Button, PageView, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import { ConfigGame, TGameConfigInfo } from '../../Config/ConfigGame';
import GConst from '../../Define/GConst';
import { GEnum } from '../../Define/GEnum';
import { MenuPageViewItem } from '../../Entity/MenuPageViewItem/MenuPageViewItem';
import Session from '../../Session/Session';
import { UIDiamondNoEnough } from '../UIDiamondNoEnough/UIDiamondNoEnough';
import { UIGame2048Go } from '../UIGame2048Go/UIGame2048Go';
import { UISetting } from '../UISetting/UISetting';
import { UITips } from '../UITips/UITips';
import { UIMenuModel } from './UIMenuModel';
import { UIMenuView } from './UIMenuView';
const { ccclass, property } = _decorator;


@ccclass('UIMenu')
export class UIMenu extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIMenu';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIMenu';

    public model: UIMenuModel = undefined;
    public view: UIMenuView = undefined;

    /** 当前游戏配置信息 */
    private _curGameConfigInfo: TGameConfigInfo = undefined;

    async initData() {
        for (let key in ConfigGame) {
            if (ConfigGame[key].switch) {
                let pageItem = await FY.entity.getEntity(MenuPageViewItem, this.view.cModelPageView.node);
                pageItem.setData(ConfigGame[key]);
                this.view.cModelPageView.addPage(pageItem.node);
                if (!this._curGameConfigInfo) {
                    this._curGameConfigInfo = ConfigGame[key];
                }
            }
        }
        this.model.init();
        this.refreshUI();
    }

    refreshUI() {
        // this.view.cInfiniteButton.interactable = this._curGameConfigInfo.model[0];
        // this.view.cLevelButton.interactable = this._curGameConfigInfo.model[1];
    }

    startGame(gameType: GEnum.GameType, gameMode: GEnum.GameMode) {
        Session.selectedGameMode = gameMode
        Session.selectedGameType = gameType;
        switch (gameType) {
            case GEnum.GameType.G2048Go:
                FY.ui.open(UIGame2048Go)
                break;

            default:
                break;
        }
    }

    start() {
        this.initData();
    }

    onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }

        this.on(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
        this.on(FYEnum.UIEvent.PageViewPageTurning, this.onPageViewPageTurning, this);

        FY.event.on(GEnum.GameEvent.DiamondNumChanged, this.onDiamondNumChanged, this);
    }

    onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }

        this.off(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
        this.off(FYEnum.UIEvent.PageViewPageTurning, this.onPageViewPageTurning, this);

        FY.event.off(GEnum.GameEvent.DiamondNumChanged, this.onDiamondNumChanged, this);
    }

    private async onButtonClick(eventType: string, component: Button) {
        console.log(component.name);
        // if (this.view.cLevelButton.name === component.name) {
        //     if (!this._curGameConfigInfo.model[1]) {
        //         (await FY.ui.open(UITips)).show('暂未开放，敬请期待');
        //     } else {
        //         this.startGame(this._curGameConfigInfo.gameType, GEnum.GameMode.Level);
        //     }
        // } else 
        if (this.view.cInfiniteButton.name === component.name) {
            if (!this._curGameConfigInfo.model[0]) {
                (await FY.ui.open(UITips)).show('暂未开放，敬请期待');
            } else {
                this.startGame(this._curGameConfigInfo.gameType, GEnum.GameMode.Infinite);
            }
        } else if (this.view.cSettingButton.name === component.name) {
            FY.ui.open(UISetting);
        } else if (this.view.cShareButton.name === component.name) {
            FY.share.shareMessage(GConst.SHARE_TITLE, '', '', null);
        } else if (this.view.cDiamondAddButton.name === component.name) {
            FY.ui.open(UIDiamondNoEnough);
        }
    }

    private onPageViewPageTurning(eventType: string, component: PageView) {
        this._curGameConfigInfo = component.getPages()[component.getCurrentPageIndex()].getComponent(MenuPageViewItem).getGameConfigInfo();
        // this.view.cInfiniteButton.interactable = this._curGameConfigInfo.model[0];
        // this.view.cLevelButton.interactable = this._curGameConfigInfo.model[1];
    }

    /**
     * 回调 钻石数量发生变化
     * @param msgType 消息类型
     * @param diamondNum 钻石数量
     */
    private onDiamondNumChanged(msgType, diamondNum) {
        this.model.diamond = diamondNum;
    }
}