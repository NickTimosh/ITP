//constructor for the Zombies
function Zombie(y) {
	//initial x so all zombies start to the left of the screen
	this.x = -10;
	this.y = y;
	//set a random speed
	this.speed = random(0.2, 0.5);
	this.health = 5;

	//draw the zombie to the screen
	this.draw = function() {
			push();
			//arms
			fill(128, 0, 128);
			rect(this.x - 10, this.y - 50, 65, 15);
			rect(this.x - 10, this.y + 35, 65, 15);
			//shoulders
			rect(this.x - 20, this.y - 50, 35, 100, 10);
			//head
			fill(50);
			ellipse(this.x, this.y, 50);
			pop();
	}

	//update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		if(this.health > 0)
		{
			this.x += this.speed;
		}
		else
		{
			this.x = -70;
			this.y = y;
			this.health = 5;
		}

	}

	this.checkClick = function()
	{
		let d = dist(this.x, this.y, mouseX, mouseY)

		if(d <= 50)
		{
			this.health -= 1;
			this.health = max(0,this.health);
			
			console.log("health = ", this.health)
		}
	}
}