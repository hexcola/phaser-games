var game = new Phaser.Game(600, 800, Phaser.AUTO, 'content', {preload: preload, create: create, update: update });


var audiosRootPath = "resource/assets/audios/v3/";
var imagesRootPath = "resource/assets/images/v3/";

var audioJSON = {
    spritemap:{
        'menu':{
            start: 0,
            end: 59.5,
            loop: true 
        },
        'beep':{
            start: 59.5,
            end: 60,
            loop: false
        },
        'bounce': {
            start: 60,
            end: 60.5,
            loop: false
        },
        'hit' :{
            start: 60.5,
            end: 61,
            loop: false
        },
        'death': {
            start: 61,
            end: 62,
            loop: false
        }
    }
}


function preload(){
    game.load.atlasJSONArray(
        'defaultRes',
        imagesRootPath + 'defaultRes.png',
        imagesRootPath + 'defaultRes.json'
    );

    game.load.audiosprite('defaultRes_audio', [audiosRootPath + 'defaultRes_audio.mp3', audiosRootPath + 'defaultRes_audio.ogg'], null, audioJSON);
}

var fx;


function create(){
    sprite = game.add.sprite(100, 100, 'defaultRes', 'skull.png');

    	//	Here we set-up our audio sprite
	fx = game.add.audioSprite('defaultRes_audio');
        fx.allowMultiple = true;

	//	Make some buttons to trigger the sounds
    fx.play('death');
}

// function makeButton(name, x, y) {

//     var button = game.add.button(x, y, 'button', click, this, 0, 1, 2);
//     button.name = name;
//     button.scale.set(2, 1.5);
//     button.smoothed = false;

//     var text = game.add.bitmapText(x, y + 7, 'Arial', name, 16);
//     text.x += (button.width / 2) - (text.textWidth / 2);

// }

// function click(button) {

// 	fx.play(button.name);

// }

function update(){
    // fx.play('death');
}