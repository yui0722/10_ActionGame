var ui_gauge_fill3;

var ui_gauge_fillLayer3 = cc.Layer.extend({
    ctor: function() {
        this._super();
        ui3 = new ui_gauge_fill3();
        this.addChild(ui3);

        //cc.eventManager.addListener(listener, this);

    }

});
var ui_gauge_fill3 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.ui_gauge_fill_png);
        this.velocity = cc.p(0, 0);

        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 18) {
                    this.setPosition(tileSize + 460 , tileSize + 480);
                }
            }
        }

        // スプライトシートをキャッシュに登録
        cc.spriteFrameCache.addSpriteFrames(res.ui_plist3, res.ui_gauge_fill_png);

        var frame1 = cc.spriteFrameCache.getSpriteFrame("ui03");

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
