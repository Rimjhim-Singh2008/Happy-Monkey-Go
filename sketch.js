var survivalTime=0;
var monkey , monkey_running;
var banana ,bananaImage, stone, stoneImage;
var FoodGroup, ObstacleGroup
var score;
var ground;

function preload(){
    
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
 bananaImage = loadImage("banana.png");
  
 stoneImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas=(600,600);
  
 monkey= createSprite(100,300,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale=0.15;
  
 ground= createSprite(600,370,800,10);
 ground.velocityX=-4;
 ground.x= ground.width/2
  
 foodGroup = createGroup();
  
 obstacleGroup = createGroup();
  
}


function draw() {
  background("lightblue");
  stroke("white");
  textSize(20);
  fill("white");
  text("score; "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime; "+survivalTime,100,50);

  if(ground.x<0){
  ground.x=ground.width/2 ;
   }
   
 if(keyDown("space")&& monkey.y >= 100){
 monkey.velocityY=-12;
}  
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  
  food();
  obstacle();
  
  
  drawSprites();
}

function food(){
 
  if(frameCount%80===0){   
  banana= createSprite(300,60,20,20);
  banana.scale=0.1;
  r=Math.round(random(1,4));
  if(r==1){
   banana.addImage(bananaImage);
  }else if(r==2){
    banana.addImage(bananaImage);
  }else if(r==3){
    banana.addImage(bananaImage);
  }else {
    banana.addImage(bananaImage);
  }
  banana.y=Math.round(random(120,200));
  banana.velocityX=-6;
  banana.setLifetime=100;
  foodGroup.add(banana);
   }
}
  
  function obstacle(){
    
 if(frameCount%300===0){
 stone=createSprite(400,350,20,20);
 stone.scale=0.1;
 r=Math.round(random(1,2));
 if(r==1){
   stone.addImage(stoneImage);
 }else{
   stone.addImage(stoneImage);
 }
 stone.velocityX=-8;
 stone.setLifetime=80;
 obstacleGroup.add(stone);
      
}
  }