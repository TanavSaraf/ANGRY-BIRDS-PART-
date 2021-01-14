const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,pig1,log1;
var box3,pig2,box4,log2 ;
var box5,log3,log4;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(width/2,390,width,10);
    box1 = new Box(700,320,70,70);
    pig1=new Pig(810,350,50,50);
    box2=new Box (920,320,70,70);
    log1=new Logs(810,260,300,PI/2);

    box3=new Box(700,200,70,70);
    pig2=new Pig(810,230,50,50);
    box4=new Box(920,200,70,70);
    log2=new Logs(810,100,300,PI/2);

    box5=new Box(810,50,70,70);
    log3=new Logs(750,50,150,PI/0.8);
    log4=new Logs(900,50,150,PI/(-0.8));
    
}

function draw(){
    background(200);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    log1.display();
    pig1.display();
    
    box3.display();
    box4.display();
    log2.display();
    pig2.display();

    box5.display();
    log3.display();
    log4.display();

}