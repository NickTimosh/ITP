var character;

function setup()
{
    createCanvas(1200,600);

    character = {
        x: width/2,
        y: 250,
        head_size: random(1.0,1.3),
        body_color: [random(0,255), random(0,255),random(0,255)]
    }
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
    ellipse(character.x, character.y-50,70,80);  

    //hands
    stroke(0);
    strokeWeight(5);
    line(character.x - 22, character.y - 30,  
        character.x - 22+44,character.y - 30);

    stroke(0);
    strokeWeight(2);

    //body
    fill(character.body_color);
    rect(character.x - 13, character.y - 40, 26,35);

    //head
    fill(250,150,150);
    ellipse(character.x, character.y - 50,35*character.head_size);

    //legs
    fill(0);
    rect(character.x - 15, character.y - 8, 10,10)
    rect(character.x + 5, character.y - 8, 10,10)

    character.x += random(1,-1);
    character.y += random(-1,1);


}