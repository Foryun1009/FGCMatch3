import { Button, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import FYLog from '../../../Base/FYFramework/Log/FYLog';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import { GEnum2048Go } from '../../Define/GEnum2048Go';
import Session from '../../Session/Session';
import { UISelectedDiceModel } from './UISelectedDiceModel';
import { UISelectedDiceView } from './UISelectedDiceView';
const { ccclass, property } = _decorator;


@ccclass('UISelectedDice')
export class UISelectedDice extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UISelectedDice';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UISelectedDice';

    public model: UISelectedDiceModel = undefined;
    public view: UISelectedDiceView = undefined;

    private addEvent() {
        this.on(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    private removeEvent() {
        this.off(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }

        this.addEvent();
    }

    onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }

        this.removeEvent();
    }

    /**
     * 
     * @param eventType 事件类型
     * @param component 触发事件的组件
     */
    private async onButtonClick(eventType: string, component: Button) {
        FYLog.log(component.name)

        switch (component.name) {
            case this.view.cCloseButton.name:
                this.close();
                break;
            default:
                let reg: RegExp = /_Block\d+_<Button>/g;
                if (reg.test(component.name)) {
                    let num = Number(component.name.replace(/[^\d]/g, ' '));
                    // 扣钻石
                    Session.diamond -= 200;
                    FY.event.emit(GEnum2048Go.Event.PropSelectBlock, num);
                    this.close();
                }
                break;
        }
    }
}