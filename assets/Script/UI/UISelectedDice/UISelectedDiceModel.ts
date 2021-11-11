import { _decorator } from 'cc';
import { FYUIModelBase } from '../../../Base/FYFramework/UI/FYUIModelBase';
const { ccclass, property } = _decorator;


@ccclass('UISelectedDiceModel')
export class UISelectedDiceModel extends FYUIModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UISelectedDice';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UISelectedDice';
}