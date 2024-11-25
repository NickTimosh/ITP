/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/



var jumpSound;
var isInitialised;
var isLoaded;

function preload()
{
    isLoaded = false;
    
    soundFormats('mp3','wav');

    //load your sounds here
    jumpSound = loadSound('assets/segway_loop.mp3', function(){
        console.log("Sound is loaded");
        isLoaded = true;
    });
    jumpSound.setVolume(0.1);
}


function setup()
{
	createCanvas(1024, 576);
    isInitialised = false;

}

function draw()
{
    if(!isInitialised)
        {
            text("press any key to begin...", width/2,height/2)
        }
}


function keyPressed()
{
    if(!isInitialised)
    {
        isInitialised = true;
        //jumpSound.play();
        var r = map(mouseX, 0, width, 0.5, 4)
        if(isLoaded)
        {
            jumpSound.loop(0,r, 0.1,0.1); // rate = 0.5 for speed
        }
        
    }

    else
    {
        if(key == ' ')
        {   
            if(jumpSound.isPaused())
            {
                jumpSound.play();
            }
            else{
                jumpSound.pause();
            }
        }
    }

}
