
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function preload(){
	dustbinObj = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	paper = new Paper(800,600,50);
	console.log(paper);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300});
	}
}

function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);

  paper.display(); 

  groundObject.display();
  dustbinObj.display();
  
}

