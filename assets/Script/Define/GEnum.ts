export module GEnum {
    export enum GameType {
        /** 2048消除 */
        G2048Go = 'G2048Go',
        /** 吃掉甜甜圈 */
        GDonut = 'GDonut',
        /** 三联镇 */
        TripleTown = 'TripleTown',
    }

    export enum GameMode {
        /** 闯关模式 */
        Level = 'Level',
        /** 无尽模式 */
        Infinite = 'Infinite',
    }

    export enum StorageType {
        /** 用户信息 */
        UserInfo = 'UserInfo',
        /** 游戏数据 */
        GameData = 'GameData',
        /** 音效静音 */
        SoundMute = 'SoundMute',
        /** 音乐静音 */
        MusicMute = 'MusicMute',
        /** 震动开关 */
        Vibrate = 'Vibrate',
        /** 钻石 */
        Diamond = 'Diamond',
    }

    export enum GameEvent {
        /** 重来一次 */
        Again = 'Again',
        /** 复活 */
        Revive = 'Revive',
        /** 操作UI 为了解决UI的循环引用问题 */
        OperateUI = 'OperateUI',
        /** 钻石数量发生了变化 */
        DiamondNumChanged = 'DiamondNumChanged'
    }

    export enum MessageBoxType {
        /** 一个按钮 */
        ButtonOne = 'ButtonOne',
        /** 两个按钮 */
        ButtonTwo = 'ButtonTwo',
        /** 三个按钮 */
        ButtonThree = 'ButtonThree',
    }

    export enum AudioGroupType {
        /** 音乐 */
        Music = 'Music',
        /** 声音 */
        Sound = 'Sound',
    }
}