// This script is automatic generation, please do not edit.
// If you need add logic, please write in UITipsView.ts .
// If you need add data, please write in UITipsViewModel.ts .

import { _decorator, find, Node, UITransform, Label } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UITipsView')
export class UITipsView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UITips';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UITips';

    public cNode: Node;
    public cTips: Node;
    public cTipsUITransform: UITransform = undefined;
    public cTipsLabel: Label = undefined;
    

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
        this.cTips = find('Widget/_Tips_', this.node);
        this.cTipsUITransform = this.cTips.getComponent(UITransform);
        this.cTipsLabel = this.cTips.getComponent(Label);
        
    }

    private addEvent() {

    }

    private removeEvent() {

    }


}