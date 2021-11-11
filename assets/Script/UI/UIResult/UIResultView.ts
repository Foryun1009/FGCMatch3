// This script is automatic generation, please do not edit.
// If you need add logic, please write in UIResultView.ts .
// If you need add data, please write in UIResultViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Label, Sprite, Button } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UIResultView')
export class UIResultView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIResult';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIResult';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cScore: Node;
    public cScoreUITransform: UITransform = undefined;
    public cScoreLabel: Label = undefined;
    public cBestScore: Node;
    public cBestScoreUITransform: UITransform = undefined;
    public cBestScoreLabel: Label = undefined;
    public cHome: Node;
    public cHomeUITransform: UITransform = undefined;
    public cHomeSprite: Sprite = undefined;
    public cHomeButton: Button = undefined;
    public cAgain: Node;
    public cAgainUITransform: UITransform = undefined;
    public cAgainSprite: Sprite = undefined;
    public cAgainButton: Button = undefined;
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
        this.cScore = find('Widget/_Score_', this.node);
        this.cScoreUITransform = this.cScore.getComponent(UITransform);
        this.cScoreLabel = this.cScore.getComponent(Label);
        this.cBestScore = find('Widget/_BestScore_', this.node);
        this.cBestScoreUITransform = this.cBestScore.getComponent(UITransform);
        this.cBestScoreLabel = this.cBestScore.getComponent(Label);
        this.cHome = find('Widget/_Home_', this.node);
        this.cHomeUITransform = this.cHome.getComponent(UITransform);
        this.cHomeSprite = this.cHome.getComponent(Sprite);
        this.cHomeButton = this.cHome.getComponent(Button);
        this.cAgain = find('Widget/_Again_', this.node);
        this.cAgainUITransform = this.cAgain.getComponent(UITransform);
        this.cAgainSprite = this.cAgain.getComponent(Sprite);
        this.cAgainButton = this.cAgain.getComponent(Button);
        this.cShare = find('Widget/_Share_', this.node);
        this.cShareUITransform = this.cShare.getComponent(UITransform);
        this.cShareSprite = this.cShare.getComponent(Sprite);
        this.cShareButton = this.cShare.getComponent(Button);
        
    }

    private addEvent() {
        this.cHomeButton.node.on('click', this.oncHomeButtonClick, this);
        this.cAgainButton.node.on('click', this.oncAgainButtonClick, this);
        this.cShareButton.node.on('click', this.oncShareButtonClick, this);

    }

    private removeEvent() {
        this.cHomeButton.node.off('click', this.oncHomeButtonClick, this);
        this.cAgainButton.node.off('click', this.oncAgainButtonClick, this);
        this.cShareButton.node.off('click', this.oncShareButtonClick, this);

    }

    private oncHomeButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncAgainButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncShareButtonClick(component: Button) {
        this.emit('click', component);
    }


}