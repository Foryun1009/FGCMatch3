import { _decorator } from 'cc';
import { FYEntityModelBase } from '../../../Base/FYFramework/Entity/FYEntityModelBase';
const { ccclass, property } = _decorator;


@ccclass('MenuPageViewItemModel')
export class MenuPageViewItemModel extends FYEntityModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_Entity_MenuPageViewItem';
    /** 预制名 给实例调用 */
    public prefabName = 'P_Entity_MenuPageViewItem';
}