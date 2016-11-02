var slime;

var slimeLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        slime = new Slime();
        this.addChild(slime);

        //cc.eventManager.addListener(listener, this);

    }

});
var Slime = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.slime_green_frames);
        this.velocity = cc.p(0, 0);
        this.FrameCount = 0;
        this.setScale(1.2);

        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 7) {
                    this.setPosition(tileSize / 2 + tileSize * j, 80 * (7 - i) - tileSize / 2);
                }
            }
        }

        // スプライトシートをキャッシュに登録
        cc.spriteFrameCache.addSpriteFrames(res.slime_green_plist, res.slime_green_frames);

        var frame1 = cc.spriteFrameCache.getSpriteFrame("slime_green01");
        var frame2 = cc.spriteFrameCache.getSpriteFrame("slime_green02");
        var frame3 = cc.spriteFrameCache.getSpriteFrame("slime_green03");
        var frame4 = cc.spriteFrameCache.getSpriteFrame("slime_green04");
        var frame5 = cc.spriteFrameCache.getSpriteFrame("slime_green05");
        var frame6 = cc.spriteFrameCache.getSpriteFrame("slime_green06");
        var frame7 = cc.spriteFrameCache.getSpriteFrame("slime_green07");
        var frame8 = cc.spriteFrameCache.getSpriteFrame("slime_green08");
        var frame9 = cc.spriteFrameCache.getSpriteFrame("slime_green09");
        var frame10 = cc.spriteFrameCache.getSpriteFrame("slime_green10");
        var frame11 = cc.spriteFrameCache.getSpriteFrame("slime_green11");
        var frame12 = cc.spriteFrameCache.getSpriteFrame("slime_green12");
        var frame13 = cc.spriteFrameCache.getSpriteFrame("slime_green13");
        var frame14 = cc.spriteFrameCache.getSpriteFrame("slime_green14");
        var frame15 = cc.spriteFrameCache.getSpriteFrame("slime_green15");
        var frame16 = cc.spriteFrameCache.getSpriteFrame("slime_green16");

        //スプライトフレームを配列に登録
        var animationframe = [];
        //スライム（緑）下から
        animationframe.push(frame13);
        animationframe.push(frame14);
        animationframe.push(frame15);
        animationframe.push(frame16);
        animationframe.push(frame9);
        animationframe.push(frame10);
        animationframe.push(frame11);
        animationframe.push(frame12);
        animationframe.push(frame5);
        animationframe.push(frame6);
        animationframe.push(frame7);
        animationframe.push(frame8);
        animationframe.push(frame1);
        animationframe.push(frame2);
        animationframe.push(frame3);
        animationframe.push(frame4);

        //スプライトフレームの配列を連続再生するアニメーションの定義
        var animation = new cc.Animation(animationframe, 0.15);
        //永久ループのアクションを定義
        var action = new cc.RepeatForever(new cc.animate(animation));
        //実行
        this.initWithFile(res.slime_green_frames);
        this.runAction(action);

        this.scheduleUpdate();

    },
    update: function(dt) {
        this.FrameCount++;
        //10フレームに1回　スライムの移動計算する
        if (this.FrameCount % 10 == 0) {
            //プレイヤーの位置をスライムの位置の差を計算
            var offset_x = player.getPosition().x - this.getPosition().x;

            var velocity_x = lerp(this.velocity.x, offset_x, 0.001);
            this.velocity.x = velocity_x;

            if (this.velocity.x <= 0)
                this.setFlippedX(true);
            if (this.velocity.x > 0)
                this.setFlippedX(false);
            this.setPosition(this.getPosition().x + this.velocity.x, this.getPosition().y);
        }
    }
});
