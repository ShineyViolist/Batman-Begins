const Engine = Matter.Engine;
const Worldi = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var umbrella,lightning1,lightning2;

var droplets = [];

var timer = 0;

var timerSet = 0;

var dropletCount = 0;


function preload(){
    lightning1 = loadImage("images/lightning1.png");
    lightning2 = loadImage("images/lightning2.png");
}

function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(350,575);
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();

    timer++;

    if(World.frameCount % 1 == 0 && dropletCount <= 90){
        droplets.push(new Droplet(10,790));
        dropletCount++;
    }

    if(timer % 50 == 0 || timerSet !== 0){
        image(lightning1,350,50);
        console.log("Dog");
        timer = 0;
        timerSet++;
        if(timerSet == 50){
            timerSet = 0;
        }
    }

    for(i = 0; i < droplets.length; i++){
        droplets[i].display(); 
    }
}   

