/*
 *
 *
 *                       /\_/\
 *                      / - - \
 *                     <_  X  _>  /\_/\
 *                     /       \ <_o_o_>
 *                    <_)_U_U_(_> 
 *
 */
var lungsMatrix =[ 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], // 4
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0], // 6
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // 7
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // 8
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // 9
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // 10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 11
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 12
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 13
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 14
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 15
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 16
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 17
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 18
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 19
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 20
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 21
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], // 22
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
];
var paddingTop = 120;

var gameBestWidth = 520;
var gameBestHeight = 600 + paddingTop;

var gameBestRatio = gameBestWidth / gameBestHeight;

// Get viewport ratio.
var viewport_w = window.innerWidth;
var viewport_h = window.innerHeight - 10;

var viewportRatio = viewport_w / viewport_h;

var content = document.getElementById("content");

if(gameBestRatio > viewportRatio){
    // take viewport height as base value
    content.style.width  = viewport_w + "px";
    content.style.height = (viewport_w / gameBestRatio) + "px";


} else if(gameBestRatio < viewportRatio){
    // take viewport width as base value
    content.style.height = viewport_h + "px";
    content.style.width  = (viewport_h * gameBestRatio) + "px";
} 

var isDebug = false;

/**
 * START CREATE GAME
 */
var QuitSmokingGame = {};

/**************************************************************
 * MENU
 *************************************************************/
QuitSmokingGame.Menu = function(game){
    this.text = null;
    this.copyright = null;
    this.btn = null;
    this.music_menu = null;
}

QuitSmokingGame.Menu.prototype = {
    init: function(){
        if(isDebug){
            this.time.advancedTiming = true;
        } else{
            this.time.advancedTiming = false;
        }
    },
    preload: function(){
        this.game.load.image('btn_start', 'assets/images/btn_start.png');
        this.game.load.audio('music_menu', ['assets/audios/menu.mp3', 'assets/audios/menu.ogg']);

        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    },

    create: function(){
        this.music_menu = this.add.audio('music_menu');
        this.music_menu.play();

        this.text = this.game.add.text(game.world.centerX, game.world.centerY-100, "Quit\n Smoking",{
            font: "80px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.text.anchor.setTo(0.5, 0.5);

        this.copyright = this.game.add.text(game.world.centerX, game.world.height-30, "Author: hexcola\n Inspired by a Quit Smoking Poster",{
            font: "14px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.copyright.anchor.setTo(0.5, 0.5);

        
        this.btn = game.add.button(game.world.centerX-100, game.world.centerY+100, 'btn_start', this.starGame, this );
    },

    starGame: function(){
        this.state.start('Game');
        this.music_menu.stop();
    },

    render: function(){
        if(isDebug){
            this.game.debug.text("FPS:" + game.time.fps, 10, 20, "#ffffff");
        }
    }
}



/**************************************************************
 * GAME
 *************************************************************/
QuitSmokingGame.Game = function(game){
    this.cigarette = null;
    this.targets = null;
    this.bullet = null;

    this.bound_top = null;
    this.bound_bottom = null;
    this.bound_left = null;
    this.bound_right = null;

    this.limit_bottom = null;

    this.text = null;
    this.count = 0;

    this.isGameOver = false;

    this.cd_bg = null;
    this.cd_text = null;
    this.cd_time = 3;
    this.cd_timer;
    this.btn_restart;

    this.bounce = 1;

    this.music_bounce = null;
    this.music_hit = null;
    this.music_gameover = null;
    this.music_beep = null;

    this.copyright = null;
}

QuitSmokingGame.Game.prototype = {
    init: function(){
        this.isGameOver =false;
        this.count = 0;
        this.cd_time = 3;
        this.bounce = 1;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.renderer.renderSession.roundPixels = true;

        if(isDebug){
            this.time.advancedTiming = true;
        } else{
            this.time.advancedTiming = false;
        }
    },

    preload: function(){
        this.load.image('cigarette', 'assets/images/cigarette.png');
        this.load.image('limit_h', 'assets/images/limit_h.png');
        this.load.image('limit_v', 'assets/images/limit_v.png');
        this.load.image('cd_bg', 'assets/images/cd_bg.png');
        this.load.image('panel', 'assets/images/panel.png');
        this.load.image('btn_restart', 'assets/images/btn_restart.png');
        this.load.image('skull', 'assets/images/skull.png');
        this.load.image('bullet', 'assets/images/bullet.png');
        this.load.spritesheet('block','assets/images/block.png', 12, 12);

        this.game.load.audio('music_bounce', ['assets/audios/bounce.mp3', 'assets/audios/bounce.ogg']);
        this.game.load.audio('music_hit', ['assets/audios/hit.mp3', 'assets/audios/hit.ogg']);
        this.game.load.audio('music_gameover', ['assets/audios/gameover.mp3', 'assets/audios/gameover.ogg']);
        this.game.load.audio('music_beep', ['assets/audios/beep.mp3', 'assets/audios/beep.ogg'])

        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    },

    create: function(){
        this.music_bounce = this.add.audio('music_bounce');
        this.music_hit = this.add.audio('music_hit');
        this.music_gameover = this.add.audio('music_gameover');
        this.music_beep = this.add.audio('music_beep');

        this.count = 0;
        this.text = this.game.add.text(game.world.centerX, 45, "Killed 0 Lungs Cells",{
            font: "25px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.text.anchor.setTo(0.5, 0.5);

        // create blocks
        this.targets = this.add.group(this.game.world, 'targets', false, true, Phaser.Physics.ARCADE);
        this.targets.enableBody = true;

        for(var i=0; i<lungsMatrix[0].length; i++){
           
            for(j=0; j<lungsMatrix.length; j++){
                if(lungsMatrix[j][i] == 1){
                    var block = this.targets.create(i * 14 + 92, j*14 + paddingTop, 'block');
                    block.animations.add('killed', [1], 1, true);
                    block.body.immovable = true;
                }
            }
        }


        var bounds = new Phaser.Rectangle(70, 380 + paddingTop, this.world.width - 140, 72);
        var graphics = this.game.add.graphics(bounds.x, bounds.y);
        graphics.beginFill(0x000077);
        graphics.drawRect(0, 0, bounds.width, bounds.height);

        // create cigarette
        this.cigarette = this.add.sprite(140, 416 + paddingTop, 'cigarette');
        this.cigarette.inputEnabled = true;
        this.cigarette.anchor.set(0.5);

        this.cigarette.input.enableDrag();
        this.cigarette.input.boundsRect = bounds;
        this.game.physics.enable(this.cigarette, Phaser.Physics.ARCADE);
        this.cigarette.body.immovable = true;

        // create bullet
        this.bullet = this.game.add.sprite(90, 320 + paddingTop, 'bullet');
        this.game.physics.enable(this.bullet, Phaser.Physics.ARCADE);

        this.cd_bg = this.add.sprite(this.game.world.centerX - 100, this.game.world.centerY - 100, 'cd_bg'); 
        this.cd_text = this.game.add.text(game.world.centerX, game.world.centerY, this.cd_time,{
            font: "60px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.cd_text.anchor.setTo(0.5, 0.5);

        this.customBounds();

        this.cd_timer = game.time.create(false);
        // Play the fisrt beep.
        this.music_beep.play();
        this.cd_timer.loop(1000, this.countdown, this);
        this.cd_timer.start();

        this.copyright = this.game.add.text(game.world.centerX, game.world.height-30, "Author: hexcola\n Inspired by a Quit Smoking Poster",{
            font: "14px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.copyright.anchor.setTo(0.5, 0.5);

    },

    customBounds: function(){
        // Create top limit line
        this.bound_top = this.customBoundLine( 70, 70, 'limit_h', 3.8, 1);
        this.bound_bottom = this.customBoundLine( 70, 570, 'limit_h', 3.8, 1);
        this.bound_left = this.customBoundLine( 70, 70, 'limit_v', 1, 5);
        this.bound_right = this.customBoundLine( 450, 70, 'limit_v', 1, 5);

        this.limit_bottom = this.customBoundLine( 70, 530, 'limit_h', 3.8, 1 ,false);
    },

    customBoundLine: function(x, y, key, widthScale, heightScale, visible = true){
        var spritObj = this.add.sprite(x, y, key);
        this.game.physics.enable(spritObj, Phaser.Physics.ARCADE);
        spritObj.body.immovable = true;
        spritObj.visible =false;
        spritObj.scale.setTo(widthScale,heightScale);

        return spritObj;
    },


    countdown:function(){
        this.cd_time --;
        if(this.cd_time > 0){
            this.music_beep.play();
            this.cd_text.setText(this.cd_time);
        } else {
            this.cd_bg.kill();
            this.cd_text.kill();

            this.bullet.body.velocity.setTo(-250,250);
            
            this.bullet.body.collideWorldBounds = true;
            this.bullet.body.bounce.set(this.bounce);
            //
            this.bullet.body.onCollide = new Phaser.Signal();
            this.bullet.body.onCollide.add(this.hit, this);
            this.cd_timer.stop();
        }
    },

    bulletCollide: function(){
        for(var i=0; i <arguments.length; i++){
            this.physics.arcade.collide(this.bullet, arguments[i]);     
        } 
    },

    update: function(){
        if(this.isGameOver) return;
        this.bulletCollide(this.cigarette, this.targets, this.bound_top, this.bound_bottom, this.bound_left, this.bound_right);
        this.physics.arcade.overlap(this.bullet, this.limit_bottom, this.hitBottom, null, this);

        // check remamining blocks
        if(this.targets.total == 0 ){
            this.gameover(true);
        }
    },

    hit: function (bullet, hitObject){
        if(this.isGameOver) return;

        if(hitObject.key === "cigarette"){
            this.bullet.body.velocity.y -= 1.2 ;
            this.bullet.body.velocity.x -= 1.2 ;
            this.music_bounce.play();
        }

        if(hitObject.key === "block"){
            this.music_hit.play();
            hitObject.animations.play('killed');
            hitObject.body.destroy();
            this.count ++;
            this.text.setText("Killed "+this.count+" Lungs Cells");
        }
    },

    hitBottom: function(bullet, bottom){
        if(this.isGameOver) return;
        this.gameover(false);
    },

    restarGame: function(){
        game.state.start('Game');
    },

    /**
     * Game Over
     */
    gameover: function(isKilled){
        this.isGameOver = true;
        this.bullet.body.velocity.setTo(0,0);
        this.bullet.body.bounce.set(0);        
        this.cigarette.inputEnabled = false;

        // Player Game Over Sound.
        this.music_gameover.play();

        var panel = this.add.sprite(this.world.centerX - 175, this.world.centerY - 125, 'panel'); 

        if(isKilled){
            this.add.sprite(this.world.centerX-45, this.world.centerY - 80, 'skull');
        } else {

            var result_text = this.add.text(game.world.centerX, game.world.centerY-40, "Game Over\n Your lungs survived",{
                font: "30px Arial",
                fill: "#ffffff",
                align: "center"
            });

            result_text.anchor.setTo(0.5, 0.5);
        }

        this.btn_restart = this.add.button(this.world.centerX-100, this.world.centerY+20, 'btn_restart', this.restarGame, this );
    },

    render: function(){
        if(isDebug){
            this.game.debug.text("FPS:" + game.time.fps, 10, 20, "#ffffff");
        }
    }
}

var game = new Phaser.Game(gameBestWidth, gameBestHeight, Phaser.AUTO , "content");
game.state.add('Menu', QuitSmokingGame.Menu);
game.state.add('Game', QuitSmokingGame.Game);
game.state.start('Menu');