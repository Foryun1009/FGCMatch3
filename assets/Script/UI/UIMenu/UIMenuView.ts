// This script is automatic generation, please do not edit.
// If you need add logic, please write in UIMenuView.ts .
// If you need add data, please write in UIMenuViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Sprite, Button, PageView, Label } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UIMenuView')
export class UIMenuView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIMenu';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIMenu';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cInfinite: Node;
    public cInfiniteUITransform: UITransform = undefined;
    public cInfiniteSprite: Sprite = undefined;
    public cInfiniteButton: Button = undefined;
    public cModel: Node;
    public cModelUITransform: UITransform = undefined;
    public cModelSprite: Sprite = undefined;
    public cModelPageView: PageView = undefined;
    public cDiamondAdd: Node;
    public cDiamondAddUITransform: UITransform = undefined;
    public cDiamondAddSprite: Sprite = undefined;
    public cDiamondAddButton: Button = undefined;
    public cDiamond: Node;
    public cDiamondUITransform: UITransform = undefined;
    public cDiamondLabel: Label = undefined;
    public cBestScore: Node;
    public cBestScoreUITransform: UITransform = undefined;
    public cBestScoreLabel: Label = undefined;
    public cSetting: Node;
    public cSettingUITransform: UITransform = undefined;
    public cSettingSprite: Sprite = undefined;
    public cSettingButton: Button = undefined;
    public cShare: Node;
    public cShareUITransform: UITransform = undefined;
    public cShareSprite: Sprite = undefined;
    public cShareButton: Button = undefined;
    

    public onLoad() {
        this.initComponent();
    }

    public onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }

        this.addEvent();
    }

    public onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }

        this.removeEvent();
    } 

    private initComponent() {
        this.cNode = this.node;
        this.cNodeUITransform = this.cNode.getComponent(UITransform);
        this.cNodeWidget = this.cNode.getComponent(Widget);
        this.cInfinite = find('Widget/_Infinite_', this.node);
        this.cInfiniteUITransform = this.cInfinite.getComponent(UITransform);
        this.cInfiniteSprite = this.cInfinite.getComponent(Sprite);
        this.cInfiniteButton = this.cInfinite.getComponent(Button);
        this.cModel = find('Widget/_Model_', this.node);
        this.cModelUITransform = this.cModel.getComponent(UITransform);
        this.cModelSprite = this.cModel.getComponent(Sprite);
        this.cModelPageView = this.cModel.getComponent(PageView);
        this.cDiamondAdd = find('Widget/_DiamondAdd_', this.node);
        this.cDiamondAddUITransform = this.cDiamondAdd.getComponent(UITransform);
        this.cDiamondAddSprite = this.cDiamondAdd.getComponent(Sprite);
        this.cDiamondAddButton = this.cDiamondAdd.getComponent(Button);
        this.cDiamond = find('Widget/_DiamondAdd_/_Diamond_', this.node);
        this.cDiamondUITransform = this.cDiamond.getComponent(UITransform);
        this.cDiamondLabel = this.cDiamond.getComponent(Label);
        this.cBestScore = find('Widget/BestScore/_BestScore_', this.node);
        this.cBestScoreUITransform = this.cBestScore.getComponent(UITransform);
        this.cBestScoreLabel = this.cBestScore.getComponent(Label);
        this.cSetting = find('Widget/_Setting_', this.node);
        this.cSettingUITransform = this.cSetting.getComponent(UITransform);
        this.cSettingSprite = this.cSetting.getComponent(Sprite);
        this.cSettingButton = this.cSetting.getComponent(Button);
        this.cShare = find('Widget/_Share_', this.node);
        this.cShareUITransform = this.cShare.getComponent(UITransform);
        this.cShareSprite = this.cShare.getComponent(Sprite);
        this.cShareButton = this.cShare.getComponent(Button);
        
    }

    private addEvent() {
        this.cInfiniteButton.node.on('click', this.oncInfiniteButtonClick, this);
        this.cModelPageView.node.on('page-turning', this.oncModelPageViewPageTurning, this);
        this.cDiamondAddButton.node.on('click', this.oncDiamondAddButtonClick, this);
        this.cSettingButton.node.on('click', this.oncSettingButtonClick, this);
        this.cShareButton.node.on('click', this.oncShareButtonClick, this);

    }

    private removeEvent() {
        this.cInfiniteButton.node.off('click', this.oncInfiniteButtonClick, this);
        this.cModelPageView.node.off('page-turning', this.oncModelPageViewPageTurning, this);
        this.cDiamondAddButton.node.off('click', this.oncDiamondAddButtonClick, this);
        this.cSettingButton.node.off('click', this.oncSettingButtonClick, this);
        this.cShareButton.node.off('click', this.oncShareButtonClick, this);

    }

    private oncInfiniteButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncModelPageViewPageTurning(component: PageView) {
        this.emit('page-turning', component);
    }

    private oncDiamondAddButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncSettingButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncShareButtonClick(component: Button) {
        this.emit('click', component);
    }


}