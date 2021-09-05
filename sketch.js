var bg1
var spaceship1
var spaceship2
var player
var gameState = 0;
var playerCount;
var allPlayers;
var database
/*function preload(){

//bg1=loadImage("space bg.jpg")
spaceship1=loadAnimation("ship_1-removebg-preview (1).png",
"ship_2-removebg-preview.png",
"ship_3-removebg-preview.png",
"ship_4-removebg-preview.png")
spaceship2=loadAnimation("ship_2.1-removebg-preview (1).png",
"ship_2.2-removebg-preview.png",
"ship_2.3-removebg-preview.png",
"ship_2.4-removebg-preview.png")
}
*/
function setup(){
    canvas = createCanvas(1400,800);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
    background("white");
text(mouseX+","+mouseY,mouseX,mouseY)
    
}
