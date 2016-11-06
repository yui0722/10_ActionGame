var size;
//1:地面　2:ブロック　3:プレイヤ　4:ゾンビ 5:こうもり 6:コイン 7:スライム(緑)
var level = [
    [0, 16, 0, 17, 0, 0, 0, 0, 0, 0],
    [10, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 14, 15, 2, 2, 2, 0],
    [0, 6, 11, 0, 0, 0, 0, 12, 13, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
    [0, 7, 0, 0, 3, 0, 0, 8, 4, 9],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var tileSize = 96;
var playerPosition; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var playerSprite; //プレイヤーのスプライト
var leftBtn; //左ボタン
var rightBtn; //右ボタン
var jumpBtn; //ジャンプ
var winSize;

var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        winSize = cc.director.getWinSize();

        var background = new backgroundLayer();
        this.addChild(background);
        var background_light_shafts = new background_light_shaftsLayer();
        this.addChild(background_light_shafts);
        var Rcurtain = new RcurtainLayer();
        this.addChild(Rcurtain);
        var Lcurtain = new LcurtainLayer();
        this.addChild(Lcurtain);
        var ui_gauge_fill = new ui_gauge_fillLayer();
        this.addChild(ui_gauge_fill);
        var ui_gauge_fill2 = new ui_gauge_fillLayer2();
        this.addChild(ui_gauge_fill2);
        var ui_panels = new ui_panelsLayer();
        this.addChild(ui_panels);
        var level = new levelLayer();
        this.addChild(level);
        var player = new playerLayer();
        this.addChild(player);
        var enemys = new enemyLayer();
        this.addChild(enemys);
        var enemys2 = new enemyLayer2();
        this.addChild(enemys2);
        var zombie = new zombieLayer();
        this.addChild(zombie);
        var coins = new coinsLayer();
        this.addChild(coins);
        var coins2 = new coinsLayer2();
        this.addChild(coins2);
        var coins3 = new coinsLayer3();
        this.addChild(coins3);
        var coins4 = new coinsLayer4();
        this.addChild(coins4);
        var coins5 = new coinsLayer5();
        this.addChild(coins5);
        var coins6 = new coinsLayer6();
        this.addChild(coins6);
        var slime = new slimeLayer();
        this.addChild(slime);
        var slime_yellow = new slime_yellow_Layer();
        this.addChild(slime_yellow);
        var slime_yellow = new slime_red_Layer();
        this.addChild(slime_red);

        scorelabel_1 = new cc.LabelTTF("0", "あんずもじ奏", 25);
               scorelabel_1.setPosition(cc.p(winSize.width - 200, winSize.height - 70));
               scorelabel_1.fillStyle = "black";
               scorelabel_1.setScale(2.0);
               this.addChild(scorelabel_1);

    }
});


var backgroundLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var backgroundSprite = cc.Sprite.create(res.background_back_png);
        var size = backgroundSprite.getContentSize();
        //console.log(size);
        this.addChild(backgroundSprite);
        //console.log(winSize.width,winSize.height);
        backgroundSprite.setPosition(winSize.width / 2, winSize.height / 2);
        //背景画像を画面の大きさに合わせるためのScaling処理
        backgroundSprite.setScale(winSize.width / size.width, winSize.height / size.height);
    }
});
var background_light_shaftsLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var background_light_shaftsSprite = cc.Sprite.create(res.background_light_shafts_png);
        var size = background_light_shaftsSprite.getContentSize();
        //console.log(size);
        this.addChild(background_light_shaftsSprite);
        //console.log(winSize.width,winSize.height);
        background_light_shaftsSprite.setPosition(winSize.width / 2, winSize.height / 2);
        //背景画像を画面の大きさに合わせるためのScaling処理
        background_light_shaftsSprite.setScale(winSize.width / size.width, winSize.height / size.height);
    }
});

var ui_panelsLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var ui_panelsSprite = cc.Sprite.create(res.ui_panels_png);
        var size = ui_panelsSprite.getContentSize();
        //console.log(size);
        this.addChild(ui_panelsSprite);
        //console.log(winSize.width,winSize.height);
        ui_panelsSprite.setPosition(winSize.width / 2, winSize.height/ 0.9);
    }
});

//左カーテン
var LcurtainLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var LcurtainSprite = cc.Sprite.create(res.curtain_png);
        var size = LcurtainSprite.getContentSize();
        //console.log(size);
        this.addChild(LcurtainSprite);
        //console.log(winSize.width,winSize.height);
        LcurtainSprite.setPosition(winSize.width / 7, winSize.height / 2);
        //背景画像を画面の大きさに合わせるためのScaling処理
        LcurtainSprite.setScale(1.2);
    }

});

//右カーテン
var RcurtainLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var RcurtainSprite = cc.Sprite.create(res.curtain_png);
        var size = RcurtainSprite.getContentSize();
        RcurtainSprite.setFlippedX(true);
        //console.log(size);
        this.addChild(RcurtainSprite);
        //console.log(winSize.width,winSize.height);
        RcurtainSprite.setPosition(winSize.width - 120, winSize.height / 2);
        //背景画像を画面の大きさに合わせるためのScaling処理
        RcurtainSprite.setScale(1.2);
    }
});

var levelLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                switch (level[i][j]) {
                    case 1:
                        var groundSprite = cc.Sprite.create(res.background_front_png);
                        groundSprite.setPosition(tileSize - 620 + tileSize * j, 96 * (7 - i) - tileSize + 125);
                        this.addChild(groundSprite);
                        break;
                    case 2:
                        var blockSprite = cc.Sprite.create(res.block_png);
                        blockSprite.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                        this.addChild(blockSprite);
                        break;
                }
            }
        }
    }
});

var player;
var playerLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        player = new Player();
        this.addChild(player);
        //ショッピングカートを操作するレイヤー

        //左ボタン
        leftBtn = cc.Sprite.create(res.leftbutton_png);
        this.addChild(leftBtn, 0);
        leftBtn.setPosition(60, 40);
        leftBtn.setOpacity(128);
        leftBtn.setTag(1);
        //右ボタン
        rightBtn = cc.Sprite.create(res.rightbutton_png);
        this.addChild(rightBtn, 0);
        rightBtn.setPosition(150, 40);
        rightBtn.setOpacity(128);
        rightBtn.setTag(2);

        //ジャンプボタン
        jumpBtn = cc.Sprite.create(res.rightbutton_png);
        jumpBtn.setRotation(-90);
        this.addChild(jumpBtn, 0);
        jumpBtn.setPosition(winSize.width - 60, 40);
        jumpBtn.setOpacity(128);
        jumpBtn.setTag(3);


        cc.eventManager.addListener(listener, leftBtn);
        cc.eventManager.addListener(listener.clone(), rightBtn);
        cc.eventManager.addListener(listener.clone(), jumpBtn);

        cc.eventManager.addListener(keylistener, this);

    }
});


var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.workingFlag = false;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.jumpFlag = false;
        for (i = 0; i < 7; i++) {　　　　　　
            for (j = 0; j < 10; j++) {
                if (level[i][j] == 3) {
                    this.setPosition(tileSize / 2 + tileSize * j, 96 * (7 - i) - tileSize / 2);
                    playerPosition = {
                        x: j,
                        y: i
                    };
                }
            }
        }

        // スプライトシートをキャッシュに登録
        cc.spriteFrameCache.addSpriteFrames(res.player_plist, res.player_sheet);
        // スプライトフレームを取得 player01,player02はplistの中で定義されいいる
        var frame1 = cc.spriteFrameCache.getSpriteFrame("player01");
        var frame2 = cc.spriteFrameCache.getSpriteFrame("player02");
        var frame3 = cc.spriteFrameCache.getSpriteFrame("player03");
        var frame4 = cc.spriteFrameCache.getSpriteFrame("player04");
        var frame5 = cc.spriteFrameCache.getSpriteFrame("player05");
        //スプライトフレームを配列に登録
        var animationframe = [];
        animationframe.push(frame1);
        animationframe.push(frame2);
        animationframe.push(frame3);
        animationframe.push(frame4);
        animationframe.push(frame5);
        //スプライトフレームの配列を連続再生するアニメーションの定義
        var animation = new cc.Animation(animationframe, 0.08);
        //永久ループのアクションを定義
        var action = new cc.RepeatForever(new cc.animate(animation));
        //実行
        this.initWithFile(res.player_sheet);
        this.runAction(action);

        this.scheduleUpdate();

    },


    //移動のため
    update: function(dt) {
        console.log(this.jumpFlag, this.ySpeed);

        if (this.xSpeed > 0) { //スピードが正の値（右方向移動）
            //　向きを判定させる
            this.setFlippedX(false);
        }
        if (this.xSpeed < 0) { //スピードが負の値（左方向移動）
            this.setFlippedX(true);
        }
        //プレイヤーを降下させる処理　ジャンプボタンが押されてないときで、プレイヤが空中にある場合
        if (this.jumpFlag == false) {
            if (this.getPosition().y < tileSize * 1.6) this.ySpeed = 0;
            else this.ySpeed = this.ySpeed - 0.5;

        }
        //位置を更新する
        this.setPosition(this.getPosition().x + this.xSpeed, this.getPosition().y + this.ySpeed);

    }

});


//タッチリスナーの実装
var listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    // swallowTouches: true,

    onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var spriteSize = target.getContentSize();
        var spriteRect = cc.rect(0, 0, spriteSize.width, spriteSize.height);
        //タッチした場所が、スプライトの内部に収まっていたら
        if (cc.rectContainsPoint(spriteRect, location)) {
            console.log(target.getTag() + "Btnがタッチされました");

            //タッチしたスプライトが左ボタンだったら
            if (target.getTag()　 == 1) {
                player.xSpeed = -2.5;
                leftBtn.setOpacity(255);
                rightBtn.setOpacity(128);
            } else {
                //タッチしたスプライトが右ボタンだったら
                if (target.getTag()　 == 2) {
                    player.xSpeed = 2.5;
                    rightBtn.setOpacity(255);
                    leftBtn.setOpacity(128);
                }
            }
            //タッチしたスプライトがジャンプボタンだったら
            if (target.getTag()　 == 3) {
                if (player.jumpFlag == false && player.ySpeed == 0) player.ySpeed = 9;
                player.jumpFlag = true;
                jumpBtn.setOpacity(255);
            }
        }
        return true;
    },
    //タッチを止めたときは、移動スピードを0にする
    onTouchEnded: function(touch, event) {
        player.jumpFlag = false;
        player.xSpeed = 0;
        //player.ySpeed = 0;
        leftBtn.setOpacity(128);
        rightBtn.setOpacity(128);
        jumpBtn.setOpacity(128);
    }

});

//キーボードリスナーの実装
var keylistener = cc.EventListener.create({
    event: cc.EventListener.KEYBOARD,
    // swallowTouches: true,

    onKeyPressed: function(keyCode, event) {
        if (keyCode == 65) { // a-Keyで左に移動
            player.xSpeed = -2.5;
            leftBtn.setOpacity(255);
            rightBtn.setOpacity(128);
        }
        if (keyCode == 68) { // d-Keyで左に移動
            player.xSpeed = 2.5;
            rightBtn.setOpacity(255);
            leftBtn.setOpacity(128);
        }
        if (keyCode == 32 || keyCode == 38) { // スペースキーか上矢印キーでジャンプ
            if (player.jumpFlag == false && player.ySpeed == 0) player.ySpeed = 9;
            player.jumpFlag = true;
            jumpBtn.setOpacity(255);
        }
        return true;
    },
    onKeyReleased: function(keyCode, event) {
        player.jumpFlag = false;
        player.xSpeed = 0;
        //player.ySpeed = 0;
        leftBtn.setOpacity(128);
        rightBtn.setOpacity(128);
        jumpBtn.setOpacity(128);
    },

});
