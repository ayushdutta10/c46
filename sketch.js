const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boyLeft, boyRight, boyStanding
var blackC, blueC, brownC, greenC, purpleCv2, purpleC, rainbowC, redC, whiteC, yellowC;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21;

var engine,world;

function preload(){
blackC = loadImage("crystals/black_crystals.jpg");
blueC = loadImage("crystals/blue_crystals.jpg");
brownC = loadImage("crystals/brown_crystals.jpg");
greenC = loadImage("crystals/green_crystal.jpg");
purpleCv2 = loadImage("crystals/purple_crystals_v2.jpg");
purpleC = loadImage("crystals/purple_crystals.jpg");
rainbowC = loadImage("crystals/rainbow_crystals.jpg");
redC = loadImage("crystals/red_crystals.jpg");
whiteC = loadImage("crystals/white_crystals.jpg");
yellowC = loadImage("crystals/yellow_crystals.jpg");

boyLeft = loadImage("boy animations/left_side.jpeg");
boyRight = loadImage("boy animations/right_side.jpeg");
boyStanding = loadImage("boy animations/standing.jpeg");
}

function setup(){
createCanvas(800,800);
engine = Engine.create();
world = engine.world;
m1 = new Tile(10,400,20,800);
m2 = new Tile(400,10,800,20);
m3 = new Tile(790,400,20,800);
m4 = new Tile(400,790,800,20);
m5 = new Tile(60,50,20,100);
m6 = new Tile(125,150,20,120);
m7 = new Tile(95,200,80,20);
m8 = new Tile(170,150,20,120);
m9 = new Tile(180,200,40,20);
m10 = new Tile(105,250,60,20);
m11 = new Tile(125,260,20,40);
m12 = new Tile(190,250,40,20);
m13 = new Tile(170,260,20,40);
m14 = new Tile(75,320,40,20);
m15 = new Tile(125,360,20,40);
m16 = new Tile(105,385,60,20);
m17 = new Tile(175,370,20,40);
m18 = new Tile(185,385,40,20);
m19 = new Tile(100,450,80,20);
m20 = new Tile(130,490,20,100);
m21 = new Tile(180,490,20,100);
m22 = new Tile(190,450,40,20);
m23 = new Tile(80,740,20,80);





}
function draw(){  
background("green");
Engine.update(engine);
drawSprites();

m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();
m8.display();
m9.display();
m9.display();
m10.display();
m11.display();
m12.display();
m13.display();
m14.display();
m15.display();
m16.display();
m17.display();
m18.display();
m19.display();
m20.display();
m21.display();    
m22.display();
m23.display();

}


