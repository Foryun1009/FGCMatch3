import { Button, Label, _decorator } from 'cc';
import { FYEnum } from '../../../Base/FYFramework/Define/FYEnum';
import { FYUIModelBase } from '../../../Base/FYFramework/UI/FYUIModelBase';
import { GEnum } from '../../Define/GEnum';
const { ccclass, property } = _decorator;


@ccclass('UIMessageBoxModel')
export class UIMessageBoxModel extends FYUIModelBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIMessageBox';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIMessageBox';

    private _type: GEnum.MessageBoxType = undefined;
    public get type(): GEnum.MessageBoxType {
        return this._type;
    }
    /** 类型 */
    public set type(v: GEnum.MessageBoxType) {
        if (this._type === v) {
            return;
        }

        this._type = v;

        this.emit(FYEnum.Event.ChangeViewValue, 'cOKButton', (cOKButton: Button) => {
            cOKButton.node.active = this._type === GEnum.MessageBoxType.ButtonOne || this._type === GEnum.MessageBoxType.ButtonThree;
        });

        this.emit(FYEnum.Event.ChangeViewValue, 'cYesButton', (cYesButton: Button) => {
            cYesButton.node.active = this._type === GEnum.MessageBoxType.ButtonTwo;
        });

        this.emit(FYEnum.Event.ChangeViewValue, 'cNoButton', (cNoButton: Button) => {
            cNoButton.node.active = this._type === GEnum.MessageBoxType.ButtonTwo;
        });
    }

    private _okName: string = undefined;
    public get okName(): string {
        return this._okName;
    }
    /** ok按钮名字 */
    public set okName(v: string) {
        if (this._okName === v) {
            return;
        }

        this._okName = v;
        this.emit(FYEnum.Event.ChangeViewValue, 'cOKNameLabel', (cOKNameLabel: Label) => {
            cOKNameLabel.string = this._okName;
        });
    }

    private _yesName: string = undefined;
    public get yesName(): string {
        return this._yesName;
    }
    /** yes按钮名 */
    public set yesName(v: string) {
        if (this._yesName === v) {
            return;
        }

        this._yesName = v;
        this.emit(FYEnum.Event.ChangeViewValue, 'cYesNameLabel', (cYesNameLabel: Label) => {
            cYesNameLabel.string = this._yesName;
        });
    }

    private _noName: string = undefined;
    public get noName(): string {
        return this._noName;
    }
    /** no按钮名 */
    public set noName(v: string) {
        if (this._noName === v) {
            return;
        }

        this._noName = v;
        this.emit(FYEnum.Event.ChangeViewValue, 'cNoNameLabel', (cNoNameLabel: Label) => {
            cNoNameLabel.string = this._noName;
        });
    }

    private _title: string = undefined;
    public get title() {
        return this._title;
    }
    /** 标题 */
    public set title(v: string) {
        if (this._title === v) {
            return;
        }

        this._title = v;
        this.emit(FYEnum.Event.ChangeViewValue, 'cTitleLabel', (cTitleLabel: Label) => {
            cTitleLabel.string = this._title;
        });
    }

    private _content: string = undefined;
    public get content() {
        return this._content;
    }
    /** 内容 */
    public set content(v: string) {
        if (this._content === v) {
            return;
        }

        this._content = v;
        this.emit(FYEnum.Event.ChangeViewValue, 'cContentLabel', (cContentLabel: Label) => {
            cContentLabel.string = this._content;
        });
    }
}