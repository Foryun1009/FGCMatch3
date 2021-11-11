// This script is automatic generation, please do not edit.
// If you need add logic, please write in MenuPageViewItemView.ts .
// If you need add data, please write in MenuPageViewItemViewModel.ts .

import { _decorator, find, Node, UITransform, Label } from 'cc';
import { FYEntityViewBase } from '../../../Base/FYFramework/Entity/FYEntityViewBase';
const { ccclass, property } = _decorator;


@ccclass('MenuPageViewItemView')
export class MenuPageViewItemView extends FYEntityViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_Entity_MenuPageViewItem';
    /** 预制名 给实例调用 */
    public prefabName = 'P_Entity_MenuPageViewItem';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cGameName: Node;
    public cGameNameUITransform: UITransform = undefined;
    public cGameNameLabel: Label = undefined;
    

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
        this.cGameName = find('_GameName_', this.node);
        this.cGameNameUITransform = this.cGameName.getComponent(UITransform);
        this.cGameNameLabel = this.cGameName.getComponent(Label);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}