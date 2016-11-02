var slime_yellow;

var slime_yellow_Layer = cc.Layer.extend({
    ctor: function() {
        this._super();
        slime_yellow = new Slime_yellow();
        this.addChild(slime_yellow);

        //cc.eventManager.addListener(listener, this);

    }

});
var Slime_yellow = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.slime_red_frames);
        this.velocity = cc.p(0, 0);
        this.FrameCount = 0;
        this.setScale(1.2);

        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 8) {
                    this.setPosition(tileSize / 2 + tileSize * j, 80 * (7 - i) - tileSize / 2);
                }
            }
        }

        // スプライトシートをキャッシュに登録
        cc.spriteFrameCache.addSpriteFrames(res.slime_yellow_plist, res.slime_red_frames);

        var frame1 = cc.spriteFrameCache.getSpriteFrame("slime_yellow01");
        var frame2 = cc.spriteFrameCache.getSpriteFrame("slime_yellow02");
        var frame3 = cc.spriteFrameCache.getSpriteFrame("slime_yellow03");
        var frame4 = cc.spriteFrameCache.getSpriteFrame("slime_yellow04");
        var frame5 = cc.spriteFrameCache.getSpriteFrame("slime_yellow05");
        var frame6 = cc.spriteFrameCache.getSpriteFrame("slime_yellow06");
        var frame7 = cc.spriteFrameCache.getSpriteFrame("slime_yellow07");
        var frame8 = cc.spriteFrameCache.getSpriteFrame("slime_yellow08");
        var frame9 = cc.spriteFrameCache.getSpriteFrame("slime_yellow09");
        var frame10 = cc.spriteFrameCache.getSpriteFrame("slime_yellow10");
        var frame11 = cc.spriteFrameCache.getSpriteFrame("slime_yellow11");
        var frame12 = cc.spriteFrameCache.getSpriteFrame("slime_yellow12");

        //スプライトフレームを配列に登録
        var animationframe = [];
        //スライム（緑）下から
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
        this.initWithFile(res.slime_red_frames);
        this.runAction(action);

        this.scheduleUpdate();

    },
    update: function(dt) {
        this.FrameCount++;
        //10フレームに1回　スライムの移動計算する
        if (this.FrameCount % 10 == 0) {
            //プレイヤーの位置をスライムの位置の差を計算
            var offset_x = player.getPosition().x - this.getPosition().x;

            var velocity_x = lerp(this.velocity.x, offset_x, 0.0008);
            this.velocity.x = velocity_x;

            if (this.velocity.x <= 0)
                this.setFlippedX(true);
            if (this.velocity.x > 0)
                this.setFlippedX(false);
            this.setPosition(this.getPosition().x + this.velocity.x, this.getPosition().y);
        }
    }
});
