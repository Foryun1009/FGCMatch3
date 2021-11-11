// This script is automatic generation, please do not edit.
// If you need add logic, please write in UISelectedDiceView.ts .
// If you need add data, please write in UISelectedDiceViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Sprite, Button } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UISelectedDiceView')
export class UISelectedDiceView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UISelectedDice';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UISelectedDice';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cClose: Node;
    public cCloseUITransform: UITransform = undefined;
    public cCloseSprite: Sprite = undefined;
    public cCloseButton: Button = undefined;
    public cBlock2: Node;
    public cBlock2UITransform: UITransform = undefined;
    public cBlock2Sprite: Sprite = undefined;
    public cBlock2Button: Button = undefined;
    public cBlock4: Node;
    public cBlock4UITransform: UITransform = undefined;
    public cBlock4Sprite: Sprite = undefined;
    public cBlock4Button: Button = undefined;
    public cBlock8: Node;
    public cBlock8UITransform: UITransform = undefined;
    public cBlock8Sprite: Sprite = undefined;
    public cBlock8Button: Button = undefined;
    public cBlock16: Node;
    public cBlock16UITransform: UITransform = undefined;
    public cBlock16Sprite: Sprite = undefined;
    public cBlock16Button: Button = undefined;
    public cBlock32: Node;
    public cBlock32UITransform: UITransform = undefined;
    public cBlock32Sprite: Sprite = undefined;
    public cBlock32Button: Button = undefined;
    public cBlock64: Node;
    public cBlock64UITransform: UITransform = undefined;
    public cBlock64Sprite: Sprite = undefined;
    public cBlock64Button: Button = undefined;
    

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
        this.cClose = find('Widget/_Close_', this.node);
        this.cCloseUITransform = this.cClose.getComponent(UITransform);
        this.cCloseSprite = this.cClose.getComponent(Sprite);
        this.cCloseButton = this.cClose.getComponent(Button);
        this.cBlock2 = find('Widget/_Block2_', this.node);
        this.cBlock2UITransform = this.cBlock2.getComponent(UITransform);
        this.cBlock2Sprite = this.cBlock2.getComponent(Sprite);
        this.cBlock2Button = this.cBlock2.getComponent(Button);
        this.cBlock4 = find('Widget/_Block4_', this.node);
        this.cBlock4UITransform = this.cBlock4.getComponent(UITransform);
        this.cBlock4Sprite = this.cBlock4.getComponent(Sprite);
        this.cBlock4Button = this.cBlock4.getComponent(Button);
        this.cBlock8 = find('Widget/_Block8_', this.node);
        this.cBlock8UITransform = this.cBlock8.getComponent(UITransform);
        this.cBlock8Sprite = this.cBlock8.getComponent(Sprite);
        this.cBlock8Button = this.cBlock8.getComponent(Button);
        this.cBlock16 = find('Widget/_Block16_', this.node);
        this.cBlock16UITransform = this.cBlock16.getComponent(UITransform);
        this.cBlock16Sprite = this.cBlock16.getComponent(Sprite);
        this.cBlock16Button = this.cBlock16.getComponent(Button);
        this.cBlock32 = find('Widget/_Block32_', this.node);
        this.cBlock32UITransform = this.cBlock32.getComponent(UITransform);
        this.cBlock32Sprite = this.cBlock32.getComponent(Sprite);
        this.cBlock32Button = this.cBlock32.getComponent(Button);
        this.cBlock64 = find('Widget/_Block64_', this.node);
        this.cBlock64UITransform = this.cBlock64.getComponent(UITransform);
        this.cBlock64Sprite = this.cBlock64.getComponent(Sprite);
        this.cBlock64Button = this.cBlock64.getComponent(Button);
        
    }

    private addEvent() {
        this.cCloseButton.node.on('click', this.oncCloseButtonClick, this);
        this.cBlock2Button.node.on('click', this.oncBlock2ButtonClick, this);
        this.cBlock4Button.node.on('click', this.oncBlock4ButtonClick, this);
        this.cBlock8Button.node.on('click', this.oncBlock8ButtonClick, this);
        this.cBlock16Button.node.on('click', this.oncBlock16ButtonClick, this);
        this.cBlock32Button.node.on('click', this.oncBlock32ButtonClick, this);
        this.cBlock64Button.node.on('click', this.oncBlock64ButtonClick, this);

    }

    private removeEvent() {
        this.cCloseButton.node.off('click', this.oncCloseButtonClick, this);
        this.cBlock2Button.node.off('click', this.oncBlock2ButtonClick, this);
        this.cBlock4Button.node.off('click', this.oncBlock4ButtonClick, this);
        this.cBlock8Button.node.off('click', this.oncBlock8ButtonClick, this);
        this.cBlock16Button.node.off('click', this.oncBlock16ButtonClick, this);
        this.cBlock32Button.node.off('click', this.oncBlock32ButtonClick, this);
        this.cBlock64Button.node.off('click', this.oncBlock64ButtonClick, this);

    }

    private oncCloseButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncBlock2ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncBlock4ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncBlock8ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncBlock16ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncBlock32ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncBlock64ButtonClick(component: Button) {
        this.emit('click', component);
    }


}