var charPos_x = 350
var charPos_y = 250

function setup()
{
    createCanvas(1200,600);
    noStroke();
}

function draw()
{
    background(50,100,200);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    //hands
    stroke(charPos_x,150,150);
    strokeWeight(5);
    line(charPos_x - 22, charPos_y - 30,  
        charPos_x - 22+44,charPos_y - 30);
    noStroke();

    //body
    fill(255,0,0);
    rect(charPos_x - 13, charPos_y - 40, 26,35);

    //head
    fill(charPos_x,150,150);
    ellipse(charPos_x, charPos_y - 50,35);

    //legs
    fill(0);
    rect(charPos_x - 15, charPos_y - 8, 10,10)
    rect(charPos_x + 5, charPos_y - 8, 10,10)
}