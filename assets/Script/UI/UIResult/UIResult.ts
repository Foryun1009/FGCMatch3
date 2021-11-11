import { Button, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import FYLog from '../../../Base/FYFramework/Log/FYLog';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import GConst from '../../Define/GConst';
import { GEnum } from '../../Define/GEnum';
import { UIResultModel } from './UIResultModel';
import { UIResultView } from './UIResultView';
const { ccclass, property } = _decorator;


@ccclass('UIResult')
export class UIResult extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIResult';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIResult';

    public model: UIResultModel = undefined;
    public view: UIResultView = undefined;

    public setData(score: number) {
        this.model.score = score;
    }

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
        FYLog.log(`点击了 ${component.name}`);
        switch (component.name) {
            case this.view.cHomeButton.name:
                FY.ui.closeAll();
                FY.event.emit(GEnum.GameEvent.OperateUI, 'UIMenu', true);
                break;
            case this.view.cShareButton.name:
                FY.share.shareMessage(GConst.SHARE_TITLE, '', '', null);
                break;
            // case this.view.cReviveButton.name:
            //     (await FY.ui.open(UIMessageBox)).setData({
            //         type: GEnum.MessageBoxType.ButtonTwo, title: '提示', content: '是否看广告复活', yesButtonCb: () => {
            //             FY.event.emit(GEnum.GameEvent.Revive);
            //             this.close();
            //         }
            //     });
            //     break;
            case this.view.cAgainButton.name:
                FY.event.emit(GEnum.GameEvent.Again);
                this.close();
                break;
            default:
                break;
        }
    }
}