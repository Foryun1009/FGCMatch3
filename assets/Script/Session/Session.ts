import { FY } from "../../Base/FYFramework/Base/FY";
import { GEnum } from "../Define/GEnum";
import GameData from "./GameData";
import UserInfo from "./UserInfo";

export default class Session {
    /** 用户信息 */
    public static userInfo: UserInfo = undefined;
    /** 游戏数据 */
    public static gameData: GameData = undefined;
    /** 当前选择的游戏模式 */
    public static selectedGameMode: GEnum.GameMode = undefined;
    /** 当前选择的游戏类型 */
    public static selectedGameType: GEnum.GameType = undefined;

    /** 钻石 */
    private static _diamond: number = 300;
    public static set diamond(v: number) {
        if (this._diamond === v) {
            return;
        }
        this._diamond = v;
        FY.storage.setNumber(GEnum.StorageType.Diamond, this._diamond);
        FY.event.emit(GEnum.GameEvent.DiamondNumChanged, this._diamond);
    }
    public static get diamond(): number {
        return this._diamond;
    }

    /** 加载数据 */
    public static load() {
        FY.storage.load();
        Session.userInfo = new UserInfo(FY.storage.getObject(GEnum.StorageType.UserInfo) as UserInfo);
        Session.gameData = new GameData(FY.storage.getObject(GEnum.StorageType.GameData) as GameData);
        this._diamond = FY.storage.getNumber(GEnum.StorageType.Diamond);
        // 默认值300
        if (!this._diamond) {
            this._diamond = 300;
        }
    }

    /** 保存用户信息 */
    public static saveUserInfo() {
        FY.storage.setObject(GEnum.StorageType.UserInfo, Session.userInfo);
    }

    /** 保存游戏数据 */
    public static saveGameData() {
        FY.storage.setObject(GEnum.StorageType.GameData, Session.gameData);
    }

    /** 保存数据 */
    public static save() {
        Session.saveUserInfo();
        Session.saveGameData();
    }
}