var charPos_x;
var charPos_y;
var head_size;

function setup()
{
    createCanvas(1200,600);

    charPos_x = width/2;
    charPos_y = 250;
    head_size = random(0.8,1.3);
}

function draw()
{
    background(50,100,200);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    noStroke();
    //light
    fill(255,255,255,150);
    ellipse(charPos_x, charPos_y-50,70,80);  

    //hands
    stroke(0);
    strokeWeight(5);
    line(charPos_x - 22, charPos_y - 30,  
        charPos_x - 22+44,charPos_y - 30);

    stroke(0);
    strokeWeight(2);

    //body
    fill(255,0,0);
    rect(charPos_x - 13, charPos_y - 40, 26,35);

    //head
    fill(250,150,150);
    ellipse(charPos_x, charPos_y - 50,35*head_size);

    //legs
    fill(0);
    rect(charPos_x - 15, charPos_y - 8, 10,10)
    rect(charPos_x + 5, charPos_y - 8, 10,10)

    charPos_x += random(1,-1);
    charPos_y += random(-1,1);


}