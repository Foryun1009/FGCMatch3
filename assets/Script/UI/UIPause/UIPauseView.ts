// This script is automatic generation, please do not edit.
// If you need add logic, please write in UIPauseView.ts .
// If you need add data, please write in UIPauseViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Sprite, Button, Toggle } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UIPauseView')
export class UIPauseView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIPause';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIPause';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cHome: Node;
    public cHomeUITransform: UITransform = undefined;
    public cHomeSprite: Sprite = undefined;
    public cHomeButton: Button = undefined;
    public cAgain: Node;
    public cAgainUITransform: UITransform = undefined;
    public cAgainSprite: Sprite = undefined;
    public cAgainButton: Button = undefined;
    public cContinue: Node;
    public cContinueUITransform: UITransform = undefined;
    public cContinueSprite: Sprite = undefined;
    public cContinueButton: Button = undefined;
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
        this.cHome = find('Widget/_Home_', this.node);
        this.cHomeUITransform = this.cHome.getComponent(UITransform);
        this.cHomeSprite = this.cHome.getComponent(Sprite);
        this.cHomeButton = this.cHome.getComponent(Button);
        this.cAgain = find('Widget/_Again_', this.node);
        this.cAgainUITransform = this.cAgain.getComponent(UITransform);
        this.cAgainSprite = this.cAgain.getComponent(Sprite);
        this.cAgainButton = this.cAgain.getComponent(Button);
        this.cContinue = find('Widget/_Continue_', this.node);
        this.cContinueUITransform = this.cContinue.getComponent(UITransform);
        this.cContinueSprite = this.cContinue.getComponent(Sprite);
        this.cContinueButton = this.cContinue.getComponent(Button);
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
        this.cHomeButton.node.on('click', this.oncHomeButtonClick, this);
        this.cAgainButton.node.on('click', this.oncAgainButtonClick, this);
        this.cContinueButton.node.on('click', this.oncContinueButtonClick, this);
        this.cAudioToggle.node.on('toggle', this.oncAudioToggleToggle, this);
        this.cVibrateToggle.node.on('toggle', this.oncVibrateToggleToggle, this);
        this.cCloseButton.node.on('click', this.oncCloseButtonClick, this);

    }

    private removeEvent() {
        this.cHomeButton.node.off('click', this.oncHomeButtonClick, this);
        this.cAgainButton.node.off('click', this.oncAgainButtonClick, this);
        this.cContinueButton.node.off('click', this.oncContinueButtonClick, this);
        this.cAudioToggle.node.off('toggle', this.oncAudioToggleToggle, this);
        this.cVibrateToggle.node.off('toggle', this.oncVibrateToggleToggle, this);
        this.cCloseButton.node.off('click', this.oncCloseButtonClick, this);

    }

    private oncHomeButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncAgainButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncContinueButtonClick(component: Button) {
        this.emit('click', component);
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