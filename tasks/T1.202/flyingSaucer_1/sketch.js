//Topic 1.1 
//Object orientation revisted
//part one

// var flying_saucer_x; // declare
// var flying_saucer.y;
// var flying_saucer.width;
// var flying_saucer.height;

var flying_saucer;
var flyingSaucers;

function setup()
{
    createCanvas(1200,600);
    noStroke();

    flyingSaucers = [];

    for(var i = 1; i < 5; i++)
    {
        flyingSaucers.push(new Flying_saucer(100+ i * 250,100))
    }

}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    for(var i = 0; i < flyingSaucers.length; i++)
    {
        flyingSaucers[i].draw();
    }
    
}

function keyPressed()
{
    flying_saucer.beam_on = true;
}

function keyReleased()
{
    flying_saucer.beam_on = false;
}

// now we`re creating a constuctor function

function Flying_saucer(x,y) 
{
    this.x = x;
    this.y = y,
    this.width = random(150,250),
    this.height = random(50,100),
    this.num_lights = round(random(10,20)),
    this.brightnesses = [],

    this.hover = function()
    {
        this.x += random(-2,2); 
        this.y += random(-1,1);

        if(this.beam_on == false && random()> 0.98)
        {
            this.beam_on = true;
        }
        else if(this.beam_on == true && random() > 0.99)
        {
            this.beam_on = false;
        }
    },

    this.beam = function()
    {
        fill(255,255,100,150);
        
        if(random() > 0.1)
        {
            beginShape();
            vertex(this.x - this.width * 0.25, this.y)
            vertex(this.x + this.width * 0.25, this.y)
            vertex(this.x + this.width * 0.55, height - 100)
            vertex(this.x - this.width * 0.55, height - 100)
            endShape();
        }
    },

    this.beam_on = false,

    this.draw = function()
    {
        if(this.beam_on == true)
            {
                this.beam();
            }
            
            //draw the flying saucer
            fill(175,238,238);
            arc(
                this.x,
                this.y,
                this.width/2,
                this.height*2,
                PI,TWO_PI)
            fill(150);
            arc(
                this.x,
                this.y,
                this.width,
                this.height,
                PI,TWO_PI);
            fill(50);
            arc(
                this.x,
                this.y,
                this.width,
                this.height/2,
                0,PI);
        
                this.hover();
        
            var incr = this.width/(this.num_lights-1);
        
            for(var i = 0; i < this.num_lights; i++)
            {
                fill(this.brightnesses[i]);
                ellipse(
                    this.x - this.width/2 + incr*i,
                    this.y,
                        5)
        
                        this.brightnesses[i] += 1;
                        this.brightnesses[i] = this.brightnesses[i]%255
            }
    }

    for(var i = 0; i < this.num_lights; i++)
        {
            this.brightnesses.push((i * 10)%255)
        }
}