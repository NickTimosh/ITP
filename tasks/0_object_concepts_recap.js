// we draw things with mumbers to describe things

// then we use variables to store primitive values (numbers, strings, booleans)
var x_pos = 100;
var y_pos = 0;
var height = 120;

// things become more complicated and we need to groop variables together into objects
// objects are used to describe a singular entity within our programs
var tree = {
    x_pos: 100,
    y_pos: 0,
    height: 120,
    colour: "green",
    hasLeaves: true
}

// we want our objects to have behaviors so we use functions to create methods
var tree = {
    x_pos:  100,
    y_pos: 0,
    height: 120,
    colour: "green",
    hasLeaves: true,
    wilt: function()
        {
           console.log("I am wilting");    
        }
}

tree.wilt();

// and we also can use properties of the object inside a method with the keyword THIS
var tree = {
    x_pos: 100,
    y_pos: 0,
    height: 120,
    colour: "green",
    hasLeaves: true,
    wilt: function()
        {
            this.hasLeaves = false;    // meaning "me/my/I"
        }
}

// finally we want to create multiple versions of our objects - we use constructor functions
function Tree(col)  // capital letter for constructor function` name
{
    this.x_pos = 100,
    this.y_pos =  0,
    this.height = 120,
    this.colour = col,  // using the function input
    this.wilt = function()
        {
            this.hasLeaves = false;
        } 
}

var tree_1 = new Tree("pink");  // NEW keyword to generate many objects on the fly
var tree_2 = new Tree("green");