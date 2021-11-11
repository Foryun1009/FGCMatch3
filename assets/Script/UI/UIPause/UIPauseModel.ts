import { _decorator } from 'cc';
import { FYUIModelBase } from '../../../Base/FYFramework/UI/FYUIModelBase';
const { ccclass, property } = _decorator;


@ccclass('UIPauseModel')
export class UIPauseModel extends FYUIModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIPause';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIPause';
}