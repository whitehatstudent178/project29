const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, stand
var slingshot
var gameState="onSling"

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200})
imageMode(CENTRE)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

block8 = new Block();
block9 = new Block();
block10 = new Block();
block11 = new Block();
block12 = new Block();
block13 = new Block();
block14 = new Block();
block15 = new Block();
block16 = new Block();

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){}

function mouseDragged(){
    if(gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        }
}

function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}