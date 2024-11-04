var character;
var characters;
var img;

function preload() 
{
    img = loadImage('3-body-problem-schriftzug.jpg');
}

function setup()
{
    createCanvas(1200,600);
    characters = [];

    for(var i = 0; i < 6; i++)
    {
        characters.push(new Character(100 + i*250,200));
    }

}

function draw()
{
    background(0);
    image(img, 10, 10, width/9, height/9);

    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    for(var i = 0; i < characters.length; i++)
    {
        if(characters[i].beam_on)
        {
            characters[i].beam();
        }
        
        characters[i].hover();
        characters[i].draw();
    }

}

function Character(x, y)
{
        this.x = x;
        this.y = y;
        this.head_size = random(1.0,1.3);
        this.body_color = [random(0,255), random(0,255),random(0,255)];
        this.beam_on = false;
        this.hover = function()
        {
            this.x += random(1,-1);
            this.y += random(-1,1);

            if(this.beam_on == false && random() > 0.99)
            {
                this.beam_on = true;
            }            
            else if(this.beam_on == true && random() > 0.95)
            {
                this.beam_on = false;
            }

        };
        this.beam = function()
        {
                fill(255,255,100,150);
                triangle(
                    this.x-30, this.y+10, 
                    this.x-30-25, height - 100,
                    this.x-30+25, height - 100)
        };

        this.draw = function()
        {
            noStroke();
            //light
            fill(255,255,255,150);
            ellipse(this.x, this.y-50,70,80);  

            //hands
            stroke(250,150,150);
            strokeWeight(5);
            line(this.x - 22, this.y - 30,  
                this.x - 22+44,this.y - 30);

            stroke(0);
            strokeWeight(2);

            //tool
            fill(255,0,0);
            noStroke();
            rect(this.x - 25, this.y-40,  
                -10,50);
        
            stroke(0);
            strokeWeight(2);

            //body
            fill(this.body_color);
            rect(this.x - 13, this.y - 40, 26,35);

            //head
            fill(250,150,150);
            ellipse(this.x, this.y - 50,35*this.head_size);

            //legs
            fill(250,150,150);
            rect(this.x - 15, this.y - 8, 10,10)
            rect(this.x + 5, this.y - 8, 10,10)

            this.hover();
            if(this.beam_on == true)
            {
                this.beam();
            }
        }
}