var monkey , monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(400,400);

  monkey=createSprite(60,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;

FoodGroup = new Group();
obstacleGroup = new Group();


}


function draw() {
  background("white");
  text("Score= "+score,340,20)
  survivalTime=survivalTime+Math.round(frameRate()/60);
  text("Survival Time= "+survivalTime,220,20);
  
          
    if(keyDown("space")&&monkey.y>=280){
      monkey.velocityY=-12;
    }
    
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
    
    if(ground.x<0){
      ground.x=ground.width/2;
    }
    
    console.log(ground.x);
    spawnBanana();
    spawnObstacles();
   
    if (monkey.isTouching(FoodGroup)){
      FoodGroup.destroyEach();
      score=score+2;
    }
  
  
  drawSprites(); 
}

function spawnBanana(){
 if(frameCount % 80 === 0){
  banana=createSprite(400,180,10,10);
  banana.velocityX=-5;
  banana.y=Math.round(random(140,200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifetime=150;

  FoodGroup.add(banana);
 }  
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    obstacle=createSprite(400,320,10,10);
    obstacle.velocityX=-7;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);

  }
}




