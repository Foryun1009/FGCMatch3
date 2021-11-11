import { GEnum } from "../Define/GEnum";
import GameInfiniteModelInfo from "./GameInfiniteModeInfo";
import GameLevelModeInfo from "./GameLevelModeInfo";

export default class GameData {
    /** 无尽模式信息字典 key 游戏类型 */
    private _infiniteModeInfoDict: { [key: string]: GameInfiniteModelInfo } = undefined;
    /** 关卡模式信息字典 key 游戏模式 */
    private _levelModelInfoDict: { [key: string]: GameLevelModeInfo } = undefined;

    constructor(gameData?: GameData) {
        if (gameData) {
            this._infiniteModeInfoDict = gameData._infiniteModeInfoDict;
            this._levelModelInfoDict = gameData._levelModelInfoDict;
        }
    }

    /**
     * 获取无尽模式游戏数据
     * @param gameType 游戏类型
     * @returns 
     */
    public getInfiniteModeGameData(gameType: GEnum.GameType): GameInfiniteModelInfo {
        if (!this._infiniteModeInfoDict) {
            this._infiniteModeInfoDict = {};
        }

        if (!this._infiniteModeInfoDict[gameType]) {
            let gameData = new GameInfiniteModelInfo();
            gameData.gameType = gameType;
            gameData.score = 0;

            this._infiniteModeInfoDict[gameType] = gameData;
        }

        return this._infiniteModeInfoDict[gameType];
    }

    /**
     * 设置无尽模式游戏数据
     * @param gameType 游戏类型
     * @param gameData 游戏数据
     */
    public setInfiniteModeGameData(gameType: GEnum.GameType, gameData: GameInfiniteModelInfo) {
        if (!this._infiniteModeInfoDict) {
            this._infiniteModeInfoDict = {};
        }

        this._infiniteModeInfoDict[gameType] = gameData;
    }

    /**
     * 设置无尽模式分数
     * @param gameType 游戏类型
     * @param score 分数
     * @returns 是否设置成功
     */
    public setInfiniteModeScore(gameType: GEnum.GameType, score: number): boolean {
        let gameData = this.getInfiniteModeGameData(gameType);
        if (!gameData) {
            gameData = new GameInfiniteModelInfo();
        }

        if (score <= gameData.score) {
            return false;
        }

        gameData.score = score;
        gameData.gameType = gameType;
        this.setInfiniteModeGameData(gameType, gameData);
        return true;
    }

    /**
     * 获取关卡模式游戏数据
     * @param gameType 游戏类型
     * @returns 
     */
    public getLevelModeGameData(gameType: GEnum.GameType): GameLevelModeInfo {
        if (this._levelModelInfoDict && this._levelModelInfoDict[gameType]) {
            return this._levelModelInfoDict[gameType];
        }

        return undefined;
    }

    /**
     * 设置关卡模式游戏数据
     * @param gameType 游戏类型
     * @param gameData 游戏数据
     */
    public setLevelModeGameData(gameType: GEnum.GameType, gameData: GameLevelModeInfo) {
        if (!this._levelModelInfoDict) {
            this._levelModelInfoDict = {};
        }

        this._levelModelInfoDict[gameType] = gameData;
    }
}