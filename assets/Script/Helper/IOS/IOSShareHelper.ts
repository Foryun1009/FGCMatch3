/**
 * 苹果分享辅助器
 */

import { FY } from "../../../Base/FYFramework/Base/FY";
import { FYShareHelperBase } from "../../../Base/FYFramework/Share/FYShareHelperBase";
import { UITips } from "../../UI/UITips/UITips";


export class IOSShareHelper extends FYShareHelperBase {

    /**
     * 分享
     * @param title 分享标题
     * @param sharePicPath 分享图片地址
     * @param shareParam 分享参数
     * @param onShare 分享回调
     */
    public async shareMessage(title: string, sharePicPath: string, shareParam: string, onShare: (isSuccess: boolean) => void): void {
        (await FY.ui.open(UITips)).show('功能暂未开启，敬请期待');
    }
}