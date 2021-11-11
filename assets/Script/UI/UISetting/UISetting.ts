import { Button, Toggle, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import FYLog from '../../../Base/FYFramework/Log/FYLog';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import { GEnum } from '../../Define/GEnum';
import { UISettingModel } from './UISettingModel';
import { UISettingView } from './UISettingView';
const { ccclass, property } = _decorator;


@ccclass('UISetting')
export class UISetting extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UISetting';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UISetting';

    public model: UISettingModel = undefined;
    public view: UISettingView = undefined;

    private addEvent() {
        this.on(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
        this.on(FYEnum.UIEvent.Toggle, this.onToggle, this);
    }

    private removeEvent() {
        this.off(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
        this.off(FYEnum.UIEvent.Toggle, this.onToggle, this);
    }

    start() {
        if (super.start) {
            super.start();
        }

        this.view.cAudioToggle.isChecked = FY.audio.getGroup(GEnum.AudioGroupType.Sound).mute;
        this.view.cVibrateToggle.isChecked = FY.device.isVibrateOpen;
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
        // FYLog.log(`点击了 ${component.name}`);
        switch (component.name) {
            case this.view.cCloseButton.name:
                this.close();
                break;
            default:
                break;
        }
    }

    private onToggle(eventType: string, component: Toggle) {
        console.log(component.name)
        switch (component.name) {
            case this.view.cAudioToggle.name:
                if (FY.audio.getGroup(GEnum.AudioGroupType.Sound).mute !== component.isChecked) {
                    FY.audio.getGroup(GEnum.AudioGroupType.Sound).mute = component.isChecked;
                    FY.storage.setNumber(GEnum.StorageType.SoundMute, component.isChecked ? 1 : 0);
                }
                break;
            case this.view.cVibrateToggle.name:
                if(FY.device.isVibrateOpen !== component.isChecked){
                    FY.device.isVibrateOpen = component.isChecked;
                    FY.storage.setNumber(GEnum.StorageType.Vibrate, component.isChecked ? 1 : 0);
                }
                break;
            default:
                break;
        }
    }
}