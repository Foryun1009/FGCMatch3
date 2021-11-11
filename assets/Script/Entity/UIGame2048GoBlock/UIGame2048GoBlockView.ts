// This script is automatic generation, please do not edit.
// If you need add logic, please write in UIGame2048GoBlockView.ts .
// If you need add data, please write in UIGame2048GoBlockViewModel.ts .

import { _decorator, find, Node, UITransform, Sprite, Label } from 'cc';
import { FYEntityViewBase } from '../../../Base/FYFramework/Entity/FYEntityViewBase';
const { ccclass, property } = _decorator;


@ccclass('UIGame2048GoBlockView')
export class UIGame2048GoBlockView extends FYEntityViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_Entity_UIGame2048GoBlock';
    /** 预制名 给实例调用 */
    public prefabName = 'P_Entity_UIGame2048GoBlock';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeSprite: Sprite = undefined;
    public cValue: Node;
    public cValueUITransform: UITransform = undefined;
    public cValueLabel: Label = undefined;
    

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
        this.cNodeSprite = this.cNode.getComponent(Sprite);
        this.cValue = find('_Value_', this.node);
        this.cValueUITransform = this.cValue.getComponent(UITransform);
        this.cValueLabel = this.cValue.getComponent(Label);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}