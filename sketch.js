var garden,rabbit;
var gardenImg,rabbitImg;
var apple,Apples,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
   appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);

  apple = createSprite(190,400,1,50)
  apple.addImage(appleImg);
  apple.y = Math.round(random(300,100));
  apple.scale = 0.05;
  apple.velocity = 0.1; 
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples() {
 
  
}