export default class UserInfo {
    /** 用户编号 */
    public uid: string = undefined;
    /** 昵称 */
    public nickName: string = undefined;
    /** 头像 */
    public avatar: string = undefined;

    constructor(userInfo?: UserInfo) {
        if (userInfo) {
            this.uid = userInfo.uid;
            this.nickName = userInfo.nickName;
            this.avatar = userInfo.avatar;
        }
    }
}