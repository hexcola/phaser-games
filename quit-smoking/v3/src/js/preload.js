
var audioJSON = {
    spritemap:{
        'menu':{ start: 0, end: 59.5, loop: true },
        'beep':{ start: 59.5, end: 60, loop: false},
        'bounce': { start: 60, end: 60.5, loop: false},
        'hit' :{ start: 60.5, end: 61, loop: false},
        'death': { start: 61, end: 62, loop: false}
    }
}

var preload = function(game){}

preload.prototype = {
    preload: function(){
        // load audio resource
        this.game.load.audiosprite(this.game.customConfig.audioSprite.key,
            this.game.customConfig.audioSprite.urls,
            this.game.customConfig.audioSprite.atlasURL);
        
        this.game.load.atlasJSONArray(this.game.customConfig.imageSprite.key,
            this.game.customConfig.imageSprite.textureURL,
            this.game.customConfig.imageSprite.atlasURL);

        // this.game.load.audiosprite('defaultRes_audio', [
        //     this.game.config.default.audiosRootPath + 'defaultRes_audio.mp3', 
        //     // this.game.config.default.audiosRootPath + 'defaultRes_audio.ogg'], null, "config/audio.json");
        //     this.game.config.default.audiosRootPath + 'defaultRes_audio.ogg'], "config/audio.json");
            

        // // load texture resource
        // this.game.load.atlasJSONArray(
        //     'defaultRes',
        //     this.game.config.default.imagesRootPath + 'defaultRes.png',
        //     this.game.config.default.imagesRootPath + 'defaultRes.json'
        // );
    },

    create: function(){
        this.game.isDebug = true;
        // this.game.add.plugin(Phaser.Plugin.Debug);
        
        this.game.allAudios = this.game.add.audioSprite('defaultRes_audio');
        this.game.allAudios.allowMultiple = true;

        this.game.state.start('MainMenu');
    },
}