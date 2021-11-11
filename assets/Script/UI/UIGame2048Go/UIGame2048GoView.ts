// This script is automatic generation, please do not edit.
// If you need add logic, please write in UIGame2048GoView.ts .
// If you need add data, please write in UIGame2048GoViewModel.ts .

import { _decorator, find, Node, UITransform, Widget, Sprite, Button, Label } from 'cc';
import { FYUIViewBase } from '../../../Base/FYFramework/UI/FYUIViewBase';
const { ccclass, property } = _decorator;


@ccclass('UIGame2048GoView')
export class UIGame2048GoView extends FYUIViewBase {
    /** 预制名 给类调用 */
    public static prefabName = 'P_UI_UIGame2048Go';
    /** 预制名 给实例调用 */
    public prefabName = 'P_UI_UIGame2048Go';

    public cNode: Node;
    public cNodeUITransform: UITransform = undefined;
    public cNodeWidget: Widget = undefined;
    public cTouchArea1: Node;
    public cTouchArea1UITransform: UITransform = undefined;
    public cTouchArea1Sprite: Sprite = undefined;
    public cTouchArea1Button: Button = undefined;
    public cTouchArea2: Node;
    public cTouchArea2UITransform: UITransform = undefined;
    public cTouchArea2Sprite: Sprite = undefined;
    public cTouchArea2Button: Button = undefined;
    public cTouchArea3: Node;
    public cTouchArea3UITransform: UITransform = undefined;
    public cTouchArea3Sprite: Sprite = undefined;
    public cTouchArea3Button: Button = undefined;
    public cTouchArea4: Node;
    public cTouchArea4UITransform: UITransform = undefined;
    public cTouchArea4Sprite: Sprite = undefined;
    public cTouchArea4Button: Button = undefined;
    public cTouchArea5: Node;
    public cTouchArea5UITransform: UITransform = undefined;
    public cTouchArea5Sprite: Sprite = undefined;
    public cTouchArea5Button: Button = undefined;
    public cScore: Node;
    public cScoreUITransform: UITransform = undefined;
    public cScoreLabel: Label = undefined;
    public cBestScore: Node;
    public cBestScoreUITransform: UITransform = undefined;
    public cBestScoreLabel: Label = undefined;
    public cNextBlock: Node;
    public cNextBlockUITransform: UITransform = undefined;
    public cNextBlockSprite: Sprite = undefined;
    public cNextBlockValue: Node;
    public cNextBlockValueUITransform: UITransform = undefined;
    public cNextBlockValueLabel: Label = undefined;
    public cSetting: Node;
    public cSettingUITransform: UITransform = undefined;
    public cSettingSprite: Sprite = undefined;
    public cSettingButton: Button = undefined;
    public cDiamondAdd: Node;
    public cDiamondAddUITransform: UITransform = undefined;
    public cDiamondAddSprite: Sprite = undefined;
    public cDiamondAddButton: Button = undefined;
    public cDiamond: Node;
    public cDiamondUITransform: UITransform = undefined;
    public cDiamondLabel: Label = undefined;
    public cHelp: Node;
    public cHelpUITransform: UITransform = undefined;
    public cHelpSprite: Sprite = undefined;
    public cHelpButton: Button = undefined;
    public cBomb: Node;
    public cBombUITransform: UITransform = undefined;
    public cBombSprite: Sprite = undefined;
    public cBombButton: Button = undefined;
    public cBombNum: Node;
    public cBombNumUITransform: UITransform = undefined;
    public cBombNumLabel: Label = undefined;
    public cDice: Node;
    public cDiceUITransform: UITransform = undefined;
    public cDiceSprite: Sprite = undefined;
    public cDiceButton: Button = undefined;
    public cDiceNum: Node;
    public cDiceNumUITransform: UITransform = undefined;
    public cDiceNumLabel: Label = undefined;
    public cExchange: Node;
    public cExchangeUITransform: UITransform = undefined;
    public cExchangeSprite: Sprite = undefined;
    public cExchangeButton: Button = undefined;
    public cExchangeNum: Node;
    public cExchangeNumUITransform: UITransform = undefined;
    public cExchangeNumLabel: Label = undefined;
    public cBlockPool: Node;
    

    public onLoad() {
        this.initComponent();
    }

    public onEnable() {
        if (super.onEnable) {
            super.onEnable();
        }

        this.addEvent();
    }

    public onDisable() {
        if (super.onDisable) {
            super.onDisable();
        }

        this.removeEvent();
    } 

    private initComponent() {
        this.cNode = this.node;
        this.cNodeUITransform = this.cNode.getComponent(UITransform);
        this.cNodeWidget = this.cNode.getComponent(Widget);
        this.cTouchArea1 = find('Widget/TouchArea/_TouchArea1_', this.node);
        this.cTouchArea1UITransform = this.cTouchArea1.getComponent(UITransform);
        this.cTouchArea1Sprite = this.cTouchArea1.getComponent(Sprite);
        this.cTouchArea1Button = this.cTouchArea1.getComponent(Button);
        this.cTouchArea2 = find('Widget/TouchArea/_TouchArea2_', this.node);
        this.cTouchArea2UITransform = this.cTouchArea2.getComponent(UITransform);
        this.cTouchArea2Sprite = this.cTouchArea2.getComponent(Sprite);
        this.cTouchArea2Button = this.cTouchArea2.getComponent(Button);
        this.cTouchArea3 = find('Widget/TouchArea/_TouchArea3_', this.node);
        this.cTouchArea3UITransform = this.cTouchArea3.getComponent(UITransform);
        this.cTouchArea3Sprite = this.cTouchArea3.getComponent(Sprite);
        this.cTouchArea3Button = this.cTouchArea3.getComponent(Button);
        this.cTouchArea4 = find('Widget/TouchArea/_TouchArea4_', this.node);
        this.cTouchArea4UITransform = this.cTouchArea4.getComponent(UITransform);
        this.cTouchArea4Sprite = this.cTouchArea4.getComponent(Sprite);
        this.cTouchArea4Button = this.cTouchArea4.getComponent(Button);
        this.cTouchArea5 = find('Widget/TouchArea/_TouchArea5_', this.node);
        this.cTouchArea5UITransform = this.cTouchArea5.getComponent(UITransform);
        this.cTouchArea5Sprite = this.cTouchArea5.getComponent(Sprite);
        this.cTouchArea5Button = this.cTouchArea5.getComponent(Button);
        this.cScore = find('Widget/TopContainer/_Score_', this.node);
        this.cScoreUITransform = this.cScore.getComponent(UITransform);
        this.cScoreLabel = this.cScore.getComponent(Label);
        this.cBestScore = find('Widget/TopContainer/BestScore/_BestScore_', this.node);
        this.cBestScoreUITransform = this.cBestScore.getComponent(UITransform);
        this.cBestScoreLabel = this.cBestScore.getComponent(Label);
        this.cNextBlock = find('Widget/TopContainer/NextBlock/_NextBlock_', this.node);
        this.cNextBlockUITransform = this.cNextBlock.getComponent(UITransform);
        this.cNextBlockSprite = this.cNextBlock.getComponent(Sprite);
        this.cNextBlockValue = find('Widget/TopContainer/NextBlock/_NextBlock_/_NextBlockValue_', this.node);
        this.cNextBlockValueUITransform = this.cNextBlockValue.getComponent(UITransform);
        this.cNextBlockValueLabel = this.cNextBlockValue.getComponent(Label);
        this.cSetting = find('Widget/TopContainer/_Setting_', this.node);
        this.cSettingUITransform = this.cSetting.getComponent(UITransform);
        this.cSettingSprite = this.cSetting.getComponent(Sprite);
        this.cSettingButton = this.cSetting.getComponent(Button);
        this.cDiamondAdd = find('Widget/TopContainer/_DiamondAdd_', this.node);
        this.cDiamondAddUITransform = this.cDiamondAdd.getComponent(UITransform);
        this.cDiamondAddSprite = this.cDiamondAdd.getComponent(Sprite);
        this.cDiamondAddButton = this.cDiamondAdd.getComponent(Button);
        this.cDiamond = find('Widget/TopContainer/_DiamondAdd_/_Diamond_', this.node);
        this.cDiamondUITransform = this.cDiamond.getComponent(UITransform);
        this.cDiamondLabel = this.cDiamond.getComponent(Label);
        this.cHelp = find('Widget/TopContainer/_Help_', this.node);
        this.cHelpUITransform = this.cHelp.getComponent(UITransform);
        this.cHelpSprite = this.cHelp.getComponent(Sprite);
        this.cHelpButton = this.cHelp.getComponent(Button);
        this.cBomb = find('Widget/BottomContainer/_Bomb_', this.node);
        this.cBombUITransform = this.cBomb.getComponent(UITransform);
        this.cBombSprite = this.cBomb.getComponent(Sprite);
        this.cBombButton = this.cBomb.getComponent(Button);
        this.cBombNum = find('Widget/BottomContainer/_Bomb_/_BombNum_', this.node);
        this.cBombNumUITransform = this.cBombNum.getComponent(UITransform);
        this.cBombNumLabel = this.cBombNum.getComponent(Label);
        this.cDice = find('Widget/BottomContainer/_Dice_', this.node);
        this.cDiceUITransform = this.cDice.getComponent(UITransform);
        this.cDiceSprite = this.cDice.getComponent(Sprite);
        this.cDiceButton = this.cDice.getComponent(Button);
        this.cDiceNum = find('Widget/BottomContainer/_Dice_/_DiceNum_', this.node);
        this.cDiceNumUITransform = this.cDiceNum.getComponent(UITransform);
        this.cDiceNumLabel = this.cDiceNum.getComponent(Label);
        this.cExchange = find('Widget/BottomContainer/_Exchange_', this.node);
        this.cExchangeUITransform = this.cExchange.getComponent(UITransform);
        this.cExchangeSprite = this.cExchange.getComponent(Sprite);
        this.cExchangeButton = this.cExchange.getComponent(Button);
        this.cExchangeNum = find('Widget/BottomContainer/_Exchange_/_ExchangeNum_', this.node);
        this.cExchangeNumUITransform = this.cExchangeNum.getComponent(UITransform);
        this.cExchangeNumLabel = this.cExchangeNum.getComponent(Label);
        this.cBlockPool = find('Widget/_BlockPool_', this.node);
        
    }

    private addEvent() {
        this.cTouchArea1Button.node.on('click', this.oncTouchArea1ButtonClick, this);
        this.cTouchArea2Button.node.on('click', this.oncTouchArea2ButtonClick, this);
        this.cTouchArea3Button.node.on('click', this.oncTouchArea3ButtonClick, this);
        this.cTouchArea4Button.node.on('click', this.oncTouchArea4ButtonClick, this);
        this.cTouchArea5Button.node.on('click', this.oncTouchArea5ButtonClick, this);
        this.cSettingButton.node.on('click', this.oncSettingButtonClick, this);
        this.cDiamondAddButton.node.on('click', this.oncDiamondAddButtonClick, this);
        this.cHelpButton.node.on('click', this.oncHelpButtonClick, this);
        this.cBombButton.node.on('click', this.oncBombButtonClick, this);
        this.cDiceButton.node.on('click', this.oncDiceButtonClick, this);
        this.cExchangeButton.node.on('click', this.oncExchangeButtonClick, this);

    }

    private removeEvent() {
        this.cTouchArea1Button.node.off('click', this.oncTouchArea1ButtonClick, this);
        this.cTouchArea2Button.node.off('click', this.oncTouchArea2ButtonClick, this);
        this.cTouchArea3Button.node.off('click', this.oncTouchArea3ButtonClick, this);
        this.cTouchArea4Button.node.off('click', this.oncTouchArea4ButtonClick, this);
        this.cTouchArea5Button.node.off('click', this.oncTouchArea5ButtonClick, this);
        this.cSettingButton.node.off('click', this.oncSettingButtonClick, this);
        this.cDiamondAddButton.node.off('click', this.oncDiamondAddButtonClick, this);
        this.cHelpButton.node.off('click', this.oncHelpButtonClick, this);
        this.cBombButton.node.off('click', this.oncBombButtonClick, this);
        this.cDiceButton.node.off('click', this.oncDiceButtonClick, this);
        this.cExchangeButton.node.off('click', this.oncExchangeButtonClick, this);

    }

    private oncTouchArea1ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncTouchArea2ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncTouchArea3ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncTouchArea4ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncTouchArea5ButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncSettingButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncDiamondAddButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncHelpButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncBombButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncDiceButtonClick(component: Button) {
        this.emit('click', component);
    }

    private oncExchangeButtonClick(component: Button) {
        this.emit('click', component);
    }


}