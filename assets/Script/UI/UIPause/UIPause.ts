import { Button, Toggle, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import { GEnum } from '../../Define/GEnum';
import { UIPauseModel } from './UIPauseModel';
import { UIPauseView } from './UIPauseView';
const { ccclass, property } = _decorator;


@ccclass('UIPause')
export class UIPause extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIPause';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIPause';

    public model: UIPauseModel = undefined;
    public view: UIPauseView = undefined;

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
            case this.view.cHomeButton.name:
                FY.ui.closeAll();
                FY.event.emit(GEnum.GameEvent.OperateUI, 'UIMenu', true);
                break;
            case this.view.cContinueButton.name:
                this.close();
                break;
            case this.view.cAgainButton.name:
                FY.event.emit(GEnum.GameEvent.Again);
                this.close();
                break;
            case this.view.cCloseButton.name:
                this.close();
                break;
            default:
                break;
        }
    }

    private onToggle(eventType: string, component: Toggle) {
        switch (component.name) {
            case this.view.cAudioToggle.name:
                if (FY.audio.getGroup(GEnum.AudioGroupType.Sound).mute !== this.view.cAudioToggle.isChecked) {
                    FY.audio.getGroup(GEnum.AudioGroupType.Sound).mute = this.view.cAudioToggle.isChecked;
                    FY.storage.setNumber(GEnum.StorageType.SoundMute, this.view.cAudioToggle.isChecked ? 1 : 0);
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