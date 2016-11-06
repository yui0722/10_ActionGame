//title
var TitleLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        // 画像の追加

        var sprite = cc.Sprite.create(res.background_back_png);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(1.2);
        this.addChild(sprite, 0);


        var sprite = cc.Sprite.create(res.title_png);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(1.2);
        this.addChild(sprite, 0);

        var sprite = cc.Sprite.create(res.start_png);
        sprite.setPosition(size.width / 2, size.height / 6);
        sprite.setScale(1.2);
        this.addChild(sprite, 1);

        var Particle = cc.Layer.extend({
                ctor : function() {
                // スプライトシートをキャッシュに登録
                cc.spriteFrameCache.addSpriteFrames(res.title_plist, res.sparkle_frames_png);
                // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
                var frame1 = cc.spriteFrameCache.getSpriteFrame("title01");
                var frame2 = cc.spriteFrameCache.getSpriteFrame("title02");
                var frame3 = cc.spriteFrameCache.getSpriteFrame("title03");
                var frame4 = cc.spriteFrameCache.getSpriteFrame("title04");
                var frame5 = cc.spriteFrameCache.getSpriteFrame("title05");
                var frame6 = cc.spriteFrameCache.getSpriteFrame("title06");
                var frame7 = cc.spriteFrameCache.getSpriteFrame("title07");
                //スプライトフレームを配列に登録
                var animationframe = [];
                animationframe.push(frame1);
                animationframe.push(frame2);
                animationframe.push(frame3);
                animationframe.push(frame4);
                animationframe.push(frame5);
                animationframe.push(frame6);
                animationframe.push(frame7);
                //スプライトフレームの配列を連続再生するアニメーションの定義
                var animation = new cc.Animation(animationframe, 0.08);
                //永久ループのアクションを定義
                var action = new cc.RepeatForever(new cc.animate(animation));
                //実行
                this.initWithFile(res.sparkle_frames_png);
                this.runAction(action);

                this.scheduleUpdate();

            },

        });

    // タップイベントリスナーを登録する
    cc.eventManager.addListener({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: this.onTouchBegan,
        onTouchMoved: this.onTouchMoved,
        onTouchEnded: this.onTouchEnded
    }, this);
    return true;
},
onTouchBegan: function(touch, event) {
    return true;
},
onTouchMoved: function(touch, event) {},
onTouchEnded: function(touch, event) {
    cc.director.runScene(new gameScene());
},
});
var TitleScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 200, 140, 128));
        this.addChild(backgroundLayer);
        //ラベルとタップイベント取得
        var layer3 = new TitleLayer();
        this.addChild(layer3);

    }
});
