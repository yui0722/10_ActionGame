var zombie;

var zombieLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        zombie = new Zombie();
        this.addChild(zombie);
        //cc.eventManager.addListener(listener, this);

    }

});
var Zombie = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.zombie_frames);
        this.velocity = cc.p(0, 0);
        this.FrameCount = 0;

        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 4) {
                    this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                }
            }
        }

        // スプライトシートをキャッシュに登録
        cc.spriteFrameCache.addSpriteFrames(res.zombie_plist, res.zombie_frames);

        // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
        var frame1 = cc.spriteFrameCache.getSpriteFrame("zombie01");
        var frame2 = cc.spriteFrameCache.getSpriteFrame("zombie02");
        var frame3 = cc.spriteFrameCache.getSpriteFrame("zombie03");
        var frame4 = cc.spriteFrameCache.getSpriteFrame("zombie04");
        var frame5 = cc.spriteFrameCache.getSpriteFrame("zombie05");
        var frame6 = cc.spriteFrameCache.getSpriteFrame("zombie06");
        var frame7 = cc.spriteFrameCache.getSpriteFrame("zombie07");
        var frame8 = cc.spriteFrameCache.getSpriteFrame("zombie08");

        //スプライトフレームを配列に登録
        var animationframe = [];
        animationframe.push(frame1);
        animationframe.push(frame2);
        animationframe.push(frame3);
        animationframe.push(frame4);
        animationframe.push(frame5);
        animationframe.push(frame6);
        animationframe.push(frame7);
        animationframe.push(frame8);

        //スプライトフレームの配列を連続再生するアニメーションの定義
        var animation = new cc.Animation(animationframe, 0.15);
        //永久ループのアクションを定義
        var action = new cc.RepeatForever(new cc.animate(animation));
        //実行
        this.initWithFile(res.zombie_frames);
        this.runAction(action);

        this.scheduleUpdate();

    },
    update: function(dt) {
        this.FrameCount++;
        //4フレームに1回　ゾンビの移動計算する
        if (this.FrameCount % 10 == 0) {
            //プレイヤーの位置をゾンビの位置の差を計算
            var offset_x = player.getPosition().x - this.getPosition().x;

            var velocity_x = lerp(this.velocity.x, offset_x,0.001);
            this.velocity.x = velocity_x;

            if (this.velocity.x <= 0)
                this.setFlippedX(true);
            if (this.velocity.x > 0)
                this.setFlippedX(false);
            this.setPosition(this.getPosition().x + this.velocity.x, this.getPosition().y);
        }
    }
});
//始点、終点、の間で 0～1.0の割合の位置を返す関数
function lerp(fStart, fEnd, fPercent) {
    return fStart + ((fEnd - fStart) * fPercent);
}
