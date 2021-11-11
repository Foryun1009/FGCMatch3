import { GEnum } from "../Define/GEnum";

/** 无限模式信息 */
export default class GameInfiniteModelInfo {
    /** 游戏类型 */
    public gameType: GEnum.GameType = undefined;
    /** 积分 */
    public score: number = 0;
}