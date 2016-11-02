var coin;

var coinsLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        coin = new coin();
        this.addChild(coin);

        //cc.eventManager.addListener(listener, this);

    }

});
var coin = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.coins_frames);
        this.velocity = cc.p(0, 0);
        this.FrameCount = 0;
        this.setScale(1.5);

        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 6) {
                    this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                }
            }
        }

        var animationframe = [];
        //スプライトフレームを格納する配列
        var texture = cc.textureCache.addImage(res.coins_frames);
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 8; j++) {
                //スプライトフレームを作成
                var frame = new cc.SpriteFrame.createWithTexture(texture, cc.rect(24 * j, 25, 24, 24));
                //スプライトフレームを配列に登録
                animationframe.push(frame);
            }
        }
        //スプライトフレームの配列を連続再生するアニメーションの定義
        var animation = new cc.Animation(animationframe, 0.08);
        //永久ループのアクションを定義
        var action = new cc.RepeatForever(new cc.animate(animation));
        //実行
        this.runAction(action);

        this.scheduleUpdate();
    },
    update: function(dt) {}
});
