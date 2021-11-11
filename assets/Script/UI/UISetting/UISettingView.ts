// This script is automatic generation, please do not edit.
// If you need add logic, please write in UISettingView.ts .
// If you need add data, please write in UISettingViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Sprite, Toggle, Button } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UISettingView')
export class UISettingView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UISetting';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UISetting';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cAudio: Node;
    public cAudioUITransform: UITransform = undefined;
    public cAudioSprite: Sprite = undefined;
    public cAudioToggle: Toggle = undefined;
    public cVibrate: Node;
    public cVibrateUITransform: UITransform = undefined;
    public cVibrateSprite: Sprite = undefined;
    public cVibrateToggle: Toggle = undefined;
    public cClose: Node;
    public cCloseUITransform: UITransform = undefined;
    public cCloseSprite: Sprite = undefined;
    public cCloseButton: Button = undefined;
    

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
        this.cAudio = find('Widget/Audio/_Audio_', this.node);
        this.cAudioUITransform = this.cAudio.getComponent(UITransform);
        this.cAudioSprite = this.cAudio.getComponent(Sprite);
        this.cAudioToggle = this.cAudio.getComponent(Toggle);
        this.cVibrate = find('Widget/Vibrate/_Vibrate_', this.node);
        this.cVibrateUITransform = this.cVibrate.getComponent(UITransform);
        this.cVibrateSprite = this.cVibrate.getComponent(Sprite);
        this.cVibrateToggle = this.cVibrate.getComponent(Toggle);
        this.cClose = find('Widget/_Close_', this.node);
        this.cCloseUITransform = this.cClose.getComponent(UITransform);
        this.cCloseSprite = this.cClose.getComponent(Sprite);
        this.cCloseButton = this.cClose.getComponent(Button);
        
    }

    private addEvent() {
        this.cAudioToggle.node.on('toggle', this.oncAudioToggleToggle, this);
        this.cVibrateToggle.node.on('toggle', this.oncVibrateToggleToggle, this);
        this.cCloseButton.node.on('click', this.oncCloseButtonClick, this);

    }

    private removeEvent() {
        this.cAudioToggle.node.off('toggle', this.oncAudioToggleToggle, this);
        this.cVibrateToggle.node.off('toggle', this.oncVibrateToggleToggle, this);
        this.cCloseButton.node.off('click', this.oncCloseButtonClick, this);

    }

    private oncAudioToggleToggle(component: Toggle) {
        this.emit('toggle', component);
    }

    private oncVibrateToggleToggle(component: Toggle) {
        this.emit('toggle', component);
    }

    private oncCloseButtonClick(component: Button) {
        this.emit('click', component);
    }


}