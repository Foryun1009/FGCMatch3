
import { sys, _decorator } from 'cc';
import { FY } from '../Base/FYFramework/Base/FY';
import { FYMain } from '../Base/FYFramework/Base/FYMain'
import GConst from './Define/GConst';
import { GEnum } from './Define/GEnum';
import { IOSShareHelper } from './Helper/IOS/IOSShareHelper';
import { WechatAdvertHelper } from './Helper/Wechat/WechatAdvertHelper';
import { WechatDeviceHelper } from './Helper/Wechat/WechatDeviceHelper';
import { WechatShareHelper } from './Helper/Wechat/WechatShareHelper';
import Session from './Session/Session';
import { UIMenu } from './UI/UIMenu/UIMenu';

const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends FYMain {

    private initComponent() {
        if (sys.platform === sys.Platform.WECHAT_GAME) {
            FY.advert.setHelper(new WechatAdvertHelper());
            FY.share.setHelper(new WechatShareHelper());
            FY.device.setHelper(new WechatDeviceHelper());

            wx.onShareAppMessage(function () {
                // 用户点击了“转发”按钮
                return {
                    title: GConst.SHARE_TITLE,
                    imageUrlId: '',
                    imageUrl: ''
                }
            })
            wx.showShareMenu({});
        }else if(sys.platform === sys.Platform.IOS){
            FY.share.setHelper(new IOSShareHelper())
        }

        FY.audio.addGroup(GEnum.AudioGroupType.Music, false, 1, 1);
        FY.audio.addGroup(GEnum.AudioGroupType.Sound, false, 1, 10);
    }

    addEvent() {
        FY.event.on(GEnum.GameEvent.OperateUI, this.onOperateUI, this);
    }

    removeEvent() {
        FY.event.off(GEnum.GameEvent.OperateUI, this.onOperateUI, this);
    }

    onLoad() {
        this.initComponent();
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

    async start() {
        Session.load();
        FY.audio.getGroup(GEnum.AudioGroupType.Sound).mute = FY.storage.getNumber(GEnum.StorageType.SoundMute) === 1;
        let vibrateTmp = FY.storage.getNumber(GEnum.StorageType.Vibrate);
        let isChecked = true;
        if (vibrateTmp === undefined) {
            isChecked = true;
        } else {
            isChecked = vibrateTmp === 1;
        }

        FY.device.isVibrateOpen = isChecked;

        FY.ui.open(UIMenu);
        // FY.audio.play('A_Music_G2048_Bg', GEnum.AudioGroupType.Music, true);
    }

    /**
     * 操作UI回调 用来解决UI之间的循环引用问题
     * @param msgType 消息类型
     * @param uiClassName ui类名
     * @param isOpen 是否打开
     */
    private onOperateUI(msgType: string, uiClassName: string, isOpen: boolean) {
        if (uiClassName === 'UIMenu') {
            if (isOpen) {
                FY.ui.open(UIMenu);
            } else {
                FY.ui.close(UIMenu);
            }
        }
    }
}