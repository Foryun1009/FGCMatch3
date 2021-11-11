import { UIGame2048GoBlock } from "../../Entity/UIGame2048GoBlock/UIGame2048GoBlock";

/** 合并信息 */
export default class UIGame2048GoMergeInfo {
    /** 目标方块 */
    public targetBlock: UIGame2048GoBlock = undefined;
    /** 合并列表 */
    public mergeList: Array<UIGame2048GoBlock> = new Array<UIGame2048GoBlock>();
}