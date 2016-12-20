var global = function() {

    this.audiosRootPath = "assets/audios/";

    this.imagesRootPath = "assets/images/";

    this.config = {
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
}