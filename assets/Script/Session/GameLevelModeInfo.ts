import { GEnum } from "../Define/GEnum";

type LevelInfo = { isLock: boolean, score: number }

/** 关卡模式信息 */
export default class GameLevelModeInfo {
    /** 游戏类型 */
    public gameType: GEnum.GameType = undefined;
    /** 关卡信息字典 */
    public levelInfoDict: { [key: string]: LevelInfo } = undefined;
}