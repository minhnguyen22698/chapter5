// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    properties: {
        button: cc.Button,
        label: cc.Label,
        sprite: cc.Sprite,
        newFrame: cc.SpriteFrame,
        _time: 0,
        isChange: 1
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function () {
        this.button.node.on('click', this.callback, this);
    },

    start() {

    },
    callback: function () {
        this.label.string = 'Hello Day 3'
    },
    btnB: function () {
        this.isChange = 0
    },
    update(dt) {
        if (this.isChange != 1) {
            this._time += dt
            this.label.string = 3 - Math.floor(this._time)
            if (this._time >= 3) {
                this.sprite.spriteFrame = this.newFrame
                this.isChange = 1
            }
        }
    },
});
