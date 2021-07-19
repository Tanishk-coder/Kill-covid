const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var ground;
var  slingshot;
var stone;
var enemy1,enemy2,enemy3;

function preload() {
  backgroundImg=loadImage("bg3.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    enemy1=new Obstacles(800,300);
    enemy2=new Obstacles(750,300);
    enemy3=new Obstacles(850,300);
    ground = new Ground(600,height,1200,20);
    stone = new Stone(200,200);    
    slingshot = new SlingShot(stone.body,{x:200, y:200});
}

function draw(){
 background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
  stone.display();
    ground.display();
    enemy1.display();
    enemy2.display();
    enemy3.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32)
   
    Matter.Body.setPosition(stone.body,{x:200,y:50});
    slingshot.attach(stone.body);
}

