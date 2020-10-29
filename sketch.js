var stone;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var BananaGroup, obstacleGroup;
var score;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1;
  
 ground = createSprite(400,350,900,10);
 ground.velocityX=-4;
 ground.x = ground.width/2;
  
 BananaGroup = createGroup();
 ObstaclesGroup = createGroup();

survivalTime = 0;
}


function draw() {
 background("skyblue");

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")&& monkey.y >= 314) {
        monkey.velocityY = -12;
    } 
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.5
    monkey.collide(ground);
  
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime = survivalTime + Math.round(getFrameRate()/60);
   text("Survival Time: " + survivalTime,20,30);  
  
  drawSprites();
  food();
  obstacles();
}

function food(){
   if (frameCount % 80 === 0){
     banana = createSprite(500,200,20,20);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.y = Math.round(random(150,230));
     
     banana.velocityX= -7;
     banana.lifetime = 80;
     
     BananaGroup.add(banana);
   }
}

function obstacles(){
   if (frameCount % 180 === 0){
     stone = createSprite(500,325,20,20);
     stone.addImage(obstacleImage);
     stone.scale = 0.1;
     
     stone.velocityX= -7;
     stone.lifetime = 80;
     
     ObstaclesGroup.add(stone);
   }
}