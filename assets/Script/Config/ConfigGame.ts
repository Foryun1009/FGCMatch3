import { GEnum } from "../Define/GEnum";

/** 游戏配置项类型 */
export type TGameConfigInfo = {
    /** 游戏开关 */
    switch: boolean,
    /** 游戏名 */
    name: string,
    /** 游戏类型 */
    gameType: GEnum.GameType,
    /** 游戏模式: 无限模式，闯关模式 */
    model: [boolean, boolean]
}

/** 游戏配置类型 */
export type TGameConfig = {
    [key: string]: TGameConfigInfo
}

export let ConfigGame: TGameConfig = {
    'G2048Go': { switch: true, name: '2048落', gameType: GEnum.GameType.G2048Go, model: [true, false] },
    'TripleTown': { switch: true, name: '三联镇', gameType: GEnum.GameType.TripleTown, model: [true, false] },
    // 'GDonut': { switch: true, name: '消灭甜甜圈', gameType: GEnum.GameType.GDonut, model: [false, false] },
}