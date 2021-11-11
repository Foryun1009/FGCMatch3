import { Button, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import { UITips } from '../UITips/UITips';
import { UIDiamondNoEnoughModel } from './UIDiamondNoEnoughModel';
import { UIDiamondNoEnoughView } from './UIDiamondNoEnoughView';
const { ccclass, property } = _decorator;


@ccclass('UIDiamondNoEnough')
export class UIDiamondNoEnough extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIDiamondNoEnough';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIDiamondNoEnough';

    public model: UIDiamondNoEnoughModel = undefined;
    public view: UIDiamondNoEnoughView = undefined;

    onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }

        this.on(FYEnum.UIEvent.ButtonClick, this.onButtonClick, this);
    }

    private async onButtonClick(eventType: string, component: Button) {
        console.log(component.name);

        if (this.view.cCloseButton.name === component.name) {
            this.close();
        } else if (this.view.cVideoButton.name === component.name) {
            (await FY.ui.open(UITips)).show('广告暂时未开启，敬请期待');
        }
    }
}