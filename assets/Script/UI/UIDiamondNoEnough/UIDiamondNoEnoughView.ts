// This script is automatic generation, please do not edit.
// If you need add logic, please write in UIDiamondNoEnoughView.ts .
// If you need add data, please write in UIDiamondNoEnoughViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Sprite, Button } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UIDiamondNoEnoughView')
export class UIDiamondNoEnoughView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIDiamondNoEnough';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIDiamondNoEnough';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cClose: Node;
    public cCloseUITransform: UITransform = undefined;
    public cCloseSprite: Sprite = undefined;
    public cCloseButton: Button = undefined;
    public cVideo: Node;
    public cVideoUITransform: UITransform = undefined;
    public cVideoSprite: Sprite = undefined;
    public cVideoButton: Button = undefined;
    

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
        this.cVideo = find('Widget/_Video_', this.node);
        this.cVideoUITransform = this.cVideo.getComponent(UITransform);
        this.cVideoSprite = this.cVideo.getComponent(Sprite);
        this.cVideoButton = this.cVideo.getComponent(Button);
        
    }

    private addEvent() {
        this.cCloseButton.node.on('click', this.oncCloseButtonClick, this);
        this.cVideoButton.node.on('click', this.oncVideoButtonClick, this);

    }

    private removeEvent() {
        this.cCloseButton.node.off('click', this.oncCloseButtonClick, this);
        this.cVideoButton.node.off('click', this.oncVideoButtonClick, this);

    }

    private oncCloseButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncVideoButtonClick(component: Button) {
        this.emit('click', component);
    }


}