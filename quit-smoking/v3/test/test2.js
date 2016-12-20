var game = new Phaser.Game(600, 800, Phaser.AUTO, 'content', {preload: preload, create: create, update: update });

var audiosRootPath = "resource/assets/audios/v3/";
var imagesRootPath = "resource/assets/images/v3/";
var audioSpritemap =[
        {key: 'menu',   start: 0,    duration: 59.5, loop: true },
        {key: 'beep',   start: 59.5, duration: 60,   loop: false},
        {key: 'bounce', start: 60,   duration: 0.5, loop: false},
        {key: 'hit',    start: 60.5, duration: 0.5,   loop: false},
        {key: 'gameover',  start: 61,   duration: 1,   loop: false}];

function preload(){
    game.load.audio('defaultRes_audio', [
            audiosRootPath + 'defaultRes_audio.mp3', 
            audiosRootPath + 'defaultRes_audio.ogg']);
}

function create(){
    var fx = game.add.audio('defaultRes_audio');
        fx.allowMultiple = true;

    for(var i=0; i < audioSpritemap.length; i++){
        fx.addMarker(audioSpritemap[i].key, 
            audioSpritemap[i].start, 
            audioSpritemap[i].duration, 
            audioSpritemap[i].loop);
    }

	//	Make some buttons to trigger the sounds
    fx.play('beep');
}

function update(){}