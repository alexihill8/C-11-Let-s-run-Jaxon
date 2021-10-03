var path
var pathImg
var surfer, surfer_running
var bombImg

function preload(){
    //pre-load images
    pathImg = loadImage("path.png");
    surfer_running = loadAnimation("Runner-1.png","Runner-2.png");
    bombImg = loadImage("bomb.png")
}
  

function setup(){
  createCanvas(400,400);

  
  //Moving background
  path=createSprite(200,200);
  path.addImage(pathImg) 
  path.velocityY = 4;
  path.scale=1.2;

  //Surfer
  surfer=createSprite(200,350);
  surfer.addAnimation("running", surfer_running);
  surfer.scale=0.1;

  //Bomb
  bomb=createSprite(200,1);
  bomb.addImage(bombImg);
  bomb.velocityY=4
  bomb.scale=0.2

  //Boundaries
  boundary1=createSprite(10,200,20,400)
  boundary1.visible=false

  boundary2=createSprite(400,200,20,400)
  boundary2.visible=false
}

function draw() {
  background(0);
  
surfer.x = World.mouseX

  //Code to reset the background
if(path.y > 400){
  path.y = height/2;
}

//code to spawn bomb
if(bomb.y > 400){
  bomb.y = height/8;
}

surfer.collide(boundary1)
surfer.collide(boundary2)

  drawSprites()
}
