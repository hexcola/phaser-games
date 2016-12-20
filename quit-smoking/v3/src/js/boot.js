var audiosRootPath = "assets/audios/";
var imagesRootPath = "assets/images/";
var config = {
    logoURL: imagesRootPath + "",

    bootPreloadImages :[
    {
        key: "preloadbar",
        url: imagesRootPath + "preloadbar.png" 
    },
    {
        key: "preloadbarBorder", 
        url: imagesRootPath + "preloadbar_border.png"
    }],

    audioSprite : {
        key: "defaultRes_audio",
        urls: [
            audiosRootPath+ "defaultRes_audio.mp3",
            audiosRootPath+ "defaultRes_audio.ogg"],

        atlasURL :audiosRootPath+ "defaultRes_audio.json"
    },

    imageSprite: {
        key: "defaultRes",
        textureURL: imagesRootPath + "defaultRes.png",
        atlasURL: imagesRootPath + "defaultRes.json"
    }
}

var boot = function(game){
    console.log("%cStarting my awesome game", "color:white; background:red");
}

boot.prototype = {
    init: function(){
        this.game.renderer.renderSession.roundPixels = true;
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.customConfig = config;
    },

    preload: function(){
        wtf(this.game)
        // for(var i=0; i< this.game.customConfig.bootPreloadImages.length; i ++){
        //     this.game.load.image(
        //         this.game.customConfig.bootPreloadImages[i].key, 
        //         this.game.customConfig.bootPreloadImages[i].url);
        // }

        // for(var i=0; i< global.config.bootPreloadImages.length; i ++){
        //     this.game.load.image(
        //         global.config.bootPreloadImages[i].key, 
        //         global.config.bootPreloadImages[i].url);
        // }

        // this.load.image('preloadBar', 'assets/images/preloadbar.png');
        // this.load.image('preloadBarBorder','assets/images/preloadbar_border.png');
    },

    create: function(){
        this.game.stage.backgroundColor = '#000';
        this.game.state.start('Preload');
    }
}