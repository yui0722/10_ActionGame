var ui_gauge_fill;

var ui_gauge_fillLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        ui = new ui_gauge_fill();
        this.addChild(ui);

        //cc.eventManager.addListener(listener, this);

    }

});
var ui_gauge_fill = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.ui_gauge_fill_png);
        this.velocity = cc.p(0, 0);

        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 16) {
                    this.setPosition(tileSize + 80 , tileSize + 480);
                }
            }
        }

        // スプライトシートをキャッシュに登録
        cc.spriteFrameCache.addSpriteFrames(res.ui_plist, res.ui_gauge_fill_png);

        var frame1 = cc.spriteFrameCache.getSpriteFrame("ui01");

        //スプライトフレームを配列に登録
        var animationframe = [];
        //スライム（緑）下から
        animationframe.push(frame1);


        //スプライトフレームの配列を連続再生するアニメーションの定義
        var animation = new cc.Animation(animationframe, 0.15);
        //永久ループのアクションを定義
        var action = new cc.RepeatForever(new cc.animate(animation));
        //実行
        this.initWithFile(res.ui_gauge_fill_png);
        this.runAction(action);

        this.scheduleUpdate();

    },
    update: function(dt) {

    }
});
