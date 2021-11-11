import { Color, Sprite, Tween, tween, Vec3, _decorator } from 'cc';
import { FY } from '../../../Base/FYFramework/Base/FY';
import { FYUIControllerBase } from '../../../Base/FYFramework/UI/FYUIControllerBase';
import { UITipsModel } from './UITipsModel';
import { UITipsView } from './UITipsView';
const { ccclass, property } = _decorator;


@ccclass('UITips')
export class UITips extends FYUIControllerBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UITips';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UITips';

    public model: UITipsModel = undefined;
    public view: UITipsView = undefined;

    public show(content: string) {
        this.view.cTipsLabel.string = content;
        this.playTween();
    }

    private playTween() {
        let widget = this.view.widget
        let startPosition = new Vec3(0, 0, 0);
        let endPosition = new Vec3(0, 80, 0);
        widget.setPosition(startPosition);

        let widgetSprite = widget.getComponent(Sprite);
        let color = widgetSprite.color;
        let showColor = new Color(color.r, color.g, color.b, 255);
        let hideColor = new Color(color.r, color.g, color.b, 0);
        widgetSprite.color = hideColor;

        Tween.stopAllByTarget(widgetSprite);
        Tween.stopAllByTarget(widget);
        tween(widgetSprite).to(0.3, { color: showColor }).delay(0.9).to(0.3, { color: hideColor }).start();
        tween(widget).to(1.5, { position: endPosition }, {
            'onComplete': (target) => {
                this.close();
            }
        }).start();
    }
}