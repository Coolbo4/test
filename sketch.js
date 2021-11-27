var bg;
const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
var engine, world;

var snow1;
function setup() {
  createCanvas(1200,600);
  engine = Engine.create(); 
  world = engine.world;

 snow1 = new Snow(800,100)
}

function preload(){
  bg = loadImage("snow2.jpg");
  
}


function draw() {
  background(bg);
  snow1.display();
  drawSprites();
}