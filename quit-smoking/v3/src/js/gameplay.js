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
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
];

/**
 * START CREATE GAME
 */
var gameplay = function(game){}

gameplay.prototype = {
    init: function(){
        this.isGameOver =false;
        this.count = 0;
        this.cd_time = 3;
        this.bounce = 1;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        if(this.game.isDebug){
            this.time.advancedTiming = true;
        } else{
            this.time.advancedTiming = false;
        }
    },

    preload: function(){
        // this.game.load.image('tempblock', 'resource/assets/images/v1/block.png');
    },

    create: function(){

        this.count = 0;

        // create blocks
        this.targets = this.add.group(this.game.world, 'targets', false, true, Phaser.Physics.ARCADE);
        // defalut config already set it to true;
        // this.targets.enableBody = true;

        for(var i=0; i<lungsMatrix[0].length; i++){
           
            for(j=0; j<lungsMatrix.length; j++){
                if(lungsMatrix[j][i] == 1){
                    var block = this.game.add.sprite(i * 14 + 92, j*14 + 120, 'defaultRes', 'block_on.png');
                    // var block = this.game.add.sprite(i * 14 + 92, j*14 + 120, 'tempblock');                    
                    this.game.physics.enable(block, Phaser.Physics.ARCADE);
                    block.body.immovable = true;
                    this.targets.add(block);
                }
            }
        }

        console.log(this.targets.total);


        var bounds = new Phaser.Rectangle(70, 500, this.world.width - 140, 72);
        var graphics = this.game.add.graphics(bounds.x, bounds.y);
        graphics.beginFill(0x000077);
        graphics.drawRect(0, 0, bounds.width, bounds.height);

        // create cigarette
        this.cigarette = this.add.sprite(140, 536, 'defaultRes','cigarette.png');
        this.cigarette.inputEnabled = true;
        this.cigarette.anchor.set(0.5);

        this.cigarette.input.enableDrag();
        this.cigarette.input.boundsRect = bounds;
        this.game.physics.enable(this.cigarette, Phaser.Physics.ARCADE);
        this.cigarette.body.immovable = true;

        // create bullet
        this.bullet = this.game.add.sprite(90, 440,'defaultRes', 'bullet.png');
        this.game.physics.enable(this.bullet, Phaser.Physics.ARCADE);

        this.cd_bg = this.add.sprite(this.game.world.centerX - 100, this.game.world.centerY - 100, 'defaultRes', 'cd_bg.png');

        this.cd_text = addText(this.game, 
            this.game.world.centerX, 
            this.game.world.centerY, 
            this.cd_time,"60px Arial");

        this.customBounds();

        this.cd_timer = this.game.time.create(false);
        // Play the fisrt beep.
        this.game.allAudios.play('beep');
        this.cd_timer.loop(1000, this.countdown, this);
        this.cd_timer.start();


        this.text = addText(this.game, this.game.world.centerX, 45, 
            "Killed 0 Lungs Cells","25px Arial");

        addText(this.game, 
            this.game.world.centerX, 
            this.game.world.height-30, 
            "Author: hexcola\n Inspired by a Quit Smoking Poster","14px Arial");
    },

    customBounds: function(){
        // Create top limit line
        this.bound_top = this.customBoundLine( 70, 70, 'limit_h.png', 3.8, 1);
        this.bound_bottom = this.customBoundLine( 70, 570, 'limit_h.png', 3.8, 1);
        this.bound_left = this.customBoundLine( 70, 70, 'limit_v.png', 1, 5);
        this.bound_right = this.customBoundLine( 450, 70, 'limit_v.png', 1, 5);
        this.limit_bottom = this.customBoundLine( 70, 530, 'limit_h.png', 3.8, 1 ,false);
    },

    customBoundLine: function(x, y, key, widthScale, heightScale, visible = true){
        var spritObj = this.add.sprite(x, y, 'defaultRes', key);
        this.game.physics.enable(spritObj, Phaser.Physics.ARCADE);
        spritObj.body.immovable = true;
        spritObj.visible =false;
        spritObj.scale.setTo(widthScale,heightScale);

        return spritObj;
    },


    countdown:function(){
        this.cd_time --;
        if(this.cd_time > 0){
            this.game.allAudios.play('beep');
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
        /**
         * 原来group内的sprite碰撞检测只要一个参数调用collide就好了
         * 如：game.physics.arcade.collide(mygroup);
         */


        for(var i=0; i <arguments.length; i++){
            this.physics.arcade.collide(this.bullet, arguments[i]);     
        } 
    },

    update: function(){
        if(this.isGameOver) return;
        this.bulletCollide(this.cigarette, this.targets, this.bound_top, this.bound_bottom, this.bound_left, this.bound_right);
        this.physics.arcade.overlap(this.bullet, this.limit_bottom, this.hitBottom, null, this);
    },

    hit: function (bullet, hitObject){
        
        if(this.isGameOver) return;

        // check remamining blocks
        if(this.targets.total == 0 ){
            this.gameover(true);
        }

        // console.log(hitObject.frameName);
        if(hitObject.frameName === "cigarette.png"){
            this.bullet.body.velocity.y -= 1.2 ;
            this.bullet.body.velocity.x -= 1.2 ;
            this.game.allAudios.play('bounce');            
        }

        if(hitObject.frameName === "block_on.png"){
            hitObject.loadTexture('defaultRes', 'block_off.png');
            this.game.allAudios.play('hit');
            hitObject.body.destroy();
            this.count ++;
            this.text.setText("Killed "+this.count+" Lungs Cells");
        }
    },

    hitBottom: function(bullet, bottom){
        if(this.isGameOver) return;
        this.gameover(false);
    },

    restartGame: function(){
        this.game.state.start('Gameplay');
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
        this.game.allAudios.play('death');

        var panel = this.add.sprite(this.world.centerX - 175, this.world.centerY - 125, 'defaultRes', 'panel.png'); 

        if(isKilled){
            this.add.sprite(this.world.centerX-45, this.world.centerY - 80, 'defaultRes', 'skull.png');
        } else {

        addText(this.game, 
                this.game.world.centerX, 
                this.game.world.centerY-40, 
                "Game Over\n Your lungs survived", "30px Arial");
        }

        // this.btn_restart = this.add.button(this.world.centerX-100, this.world.centerY+20, 'btn_restart', this.restartGame, this );

        var btn_restart = this.game.add.sprite(this.world.centerX, 
             this.world.centerY+50, 'defaultRes', 'btn_restart.png');
        
        btn_restart.anchor.set(0.5);
        btn_restart.inputEnabled = true;
        btn_restart.events.onInputDown.add(this.restartGame, this);
    },

    render: function(){
        if(this.game.isDebug){
            this.game.debug.text("FPS:" + this.game.time.fps, 10, 20, "#ffffff");
        }
    }
}