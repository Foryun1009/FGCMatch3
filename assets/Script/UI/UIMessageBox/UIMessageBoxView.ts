// This script is automatic generation, please do not edit.
// If you need add logic, please write in UIMessageBoxView.ts .
// If you need add data, please write in UIMessageBoxViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Label, Sprite, Button } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UIMessageBoxView')
export class UIMessageBoxView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIMessageBox';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIMessageBox';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cTitle: Node;
    public cTitleUITransform: UITransform = undefined;
    public cTitleLabel: Label = undefined;
    public cContent: Node;
    public cContentUITransform: UITransform = undefined;
    public cContentLabel: Label = undefined;
    public cOK: Node;
    public cOKUITransform: UITransform = undefined;
    public cOKSprite: Sprite = undefined;
    public cOKButton: Button = undefined;
    public cOKName: Node;
    public cOKNameUITransform: UITransform = undefined;
    public cOKNameLabel: Label = undefined;
    public cYes: Node;
    public cYesUITransform: UITransform = undefined;
    public cYesSprite: Sprite = undefined;
    public cYesButton: Button = undefined;
    public cYesName: Node;
    public cYesNameUITransform: UITransform = undefined;
    public cYesNameLabel: Label = undefined;
    public cNo: Node;
    public cNoUITransform: UITransform = undefined;
    public cNoSprite: Sprite = undefined;
    public cNoButton: Button = undefined;
    public cNoName: Node;
    public cNoNameUITransform: UITransform = undefined;
    public cNoNameLabel: Label = undefined;
    

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
        this.cTitle = find('Widget/TitleBg/_Title_', this.node);
        this.cTitleUITransform = this.cTitle.getComponent(UITransform);
        this.cTitleLabel = this.cTitle.getComponent(Label);
        this.cContent = find('Widget/ContentBg/_Content_', this.node);
        this.cContentUITransform = this.cContent.getComponent(UITransform);
        this.cContentLabel = this.cContent.getComponent(Label);
        this.cOK = find('Widget/_OK_', this.node);
        this.cOKUITransform = this.cOK.getComponent(UITransform);
        this.cOKSprite = this.cOK.getComponent(Sprite);
        this.cOKButton = this.cOK.getComponent(Button);
        this.cOKName = find('Widget/_OK_/_OKName_', this.node);
        this.cOKNameUITransform = this.cOKName.getComponent(UITransform);
        this.cOKNameLabel = this.cOKName.getComponent(Label);
        this.cYes = find('Widget/_Yes_', this.node);
        this.cYesUITransform = this.cYes.getComponent(UITransform);
        this.cYesSprite = this.cYes.getComponent(Sprite);
        this.cYesButton = this.cYes.getComponent(Button);
        this.cYesName = find('Widget/_Yes_/_YesName_', this.node);
        this.cYesNameUITransform = this.cYesName.getComponent(UITransform);
        this.cYesNameLabel = this.cYesName.getComponent(Label);
        this.cNo = find('Widget/_No_', this.node);
        this.cNoUITransform = this.cNo.getComponent(UITransform);
        this.cNoSprite = this.cNo.getComponent(Sprite);
        this.cNoButton = this.cNo.getComponent(Button);
        this.cNoName = find('Widget/_No_/_NoName_', this.node);
        this.cNoNameUITransform = this.cNoName.getComponent(UITransform);
        this.cNoNameLabel = this.cNoName.getComponent(Label);
        
    }

    private addEvent() {
        this.cOKButton.node.on('click', this.oncOKButtonClick, this);
        this.cYesButton.node.on('click', this.oncYesButtonClick, this);
        this.cNoButton.node.on('click', this.oncNoButtonClick, this);

    }

    private removeEvent() {
        this.cOKButton.node.off('click', this.oncOKButtonClick, this);
        this.cYesButton.node.off('click', this.oncYesButtonClick, this);
        this.cNoButton.node.off('click', this.oncNoButtonClick, this);

    }

    private oncOKButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncYesButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncNoButtonClick(component: Button) {
        this.emit('click', component);
    }


}