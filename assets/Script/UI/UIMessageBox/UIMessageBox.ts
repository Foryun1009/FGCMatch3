import { Button, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import { GEnum } from '../../Define/GEnum';
import { UIMessageBoxModel } from './UIMessageBoxModel';
import { UIMessageBoxView } from './UIMessageBoxView';
const { ccclass, property } = _decorator;

type MessageBoxParam = { type: GEnum.MessageBoxType, title: string, content: string, okButtonName?: string, yesButtonName?: string, noButtonName?: string, okButtonCb?: () => void, yesButtonCb?: () => void, noButtonCb?: () => void };

@ccclass('UIMessageBox')
export class UIMessageBox extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIMessageBox';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIMessageBox';

    public model: UIMessageBoxModel = undefined;
    public view: UIMessageBoxView = undefined;

    private _okButtonCb: () => void = undefined;
    private _yesButtonCb: () => void = undefined;
    private _noButtonCb: () => void = undefined;

    /**
     * 设置数据
     * @param param 参数
     */
    public setData(param: MessageBoxParam) {
        this.model.type = param.type;
        this.model.title = param.title;
        this.model.content = param.content;

        if (param.yesButtonName) {
            this.model.yesName = param.yesButtonName;
        }

        if (param.noButtonName) {
            this.model.noName = param.noButtonName;
        }

        if (param.okButtonName) {
            this.model.okName = param.okButtonName;
        }

        this._yesButtonCb = () => {
            if (param.yesButtonCb) {
                param.yesButtonCb();
            }

            this.close();
        }

        this._noButtonCb = () => {
            if (param.noButtonCb) {
                param.noButtonCb();
            }

            this.close();
        }

        this._okButtonCb = () => {
            if (param.okButtonCb) {
                param.okButtonCb();
            }

            this.close();
        }
    }

    addEvent() {
        this.on(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    removeEvent() {
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
    private onButtonClick(eventType: string, component: Button) {
        // FYLog.log(`点击了 ${component.name}`);
        switch (component.name) {
            case this.view.cOKButton.name:
                if (this._okButtonCb) {
                    this._okButtonCb();
                }
                break;
            case this.view.cYesButton.name:
                if (this._yesButtonCb) {
                    this._yesButtonCb();
                }
                break;
            case this.view.cNoButton.name:
                if (this._noButtonCb) {
                    this._noButtonCb();
                }
                break;
            default:
                break;
        }
    }
}