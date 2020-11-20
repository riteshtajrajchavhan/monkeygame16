var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score,invisibleground2;
var background,background1Image;
var invisibleground;
var survivalTime=0;





function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 background1Image = loadImage("Screenshot (30).png","Screenshot (30).png");
monkeyImage2 = loadImage("Screenshot__63_-removebg-preview.png")
}



function setup() {
 createCanvas(700, 400);
  
  background = createSprite(250,180,400,20);
  background.addImage(background1Image);
 background.scale=3.8;
  
invisibleground = createSprite(280,390,800,40)
  invisibleground.visible=false;

 

  
  
  
monkey = createSprite(40,320,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.2;

foodGroup = createGroup();
obstacleGroup = createGroup();


}


function draw() {
 drawSprites();
   background.velocityX = -8;

    if (background.x < 0){
      background.x = background.width/2;

    }

  if(gameState === PLAY){
  
   if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    
    }
  
   monkey.velocityY = monkey.velocityY + 0.4;
  
   banana();
 obstacles();
   
    
    
    
    fill("red")
  textSize(30);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time "+survivalTime,250,30);
    
    if(monkey.isTouching(foodGroup)){ 
  foodGroup.destroyEach();
  
 
  }  
    
    
    
    
    
    
    if(obstacleGroup.isTouching(monkey)){
        gameState = END;
    }
  }
   else if (gameState === END) {
     
  textSize(40)
     fill("red")
     text("game Over",200,200)
     
     
     
     
     obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
     
     
    
      background.velocityX=0;
     obstacleGroup.setVelocityXEach(0);
     foodGroup.setVelocityXEach(0);
    monkey.addImage(monkeyImage2)
   }
  
  
  
 monkey.collide(invisibleground);

  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
  
  }
  
  

  
  
  
}

function banana() {

  if (frameCount % 180 === 0) {
     bananas = createSprite(600,150,40,10);
   
    bananas.addImage(bananaImage);
    bananas.scale = 0.2;
    bananas.velocityX = -8;
    
     
    bananas.lifetime = 204;
    
      foodGroup.add(bananas);
    }


}


function obstacles() {

  if (frameCount % 250 === 0) {
    obstacle = createSprite(600,350,40,10);
   
    obstacle.addImage( obstaceImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    
     
    obstacle.lifetime = 204;
    
     obstacleGroup.add(obstacle);
    }


}









