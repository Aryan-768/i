var player,player_riding;
var backgr,ground,backImage;
var hoop1;
var obstacle,obstaclesGroup;
var frameCount;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
player_riding = loadAnimation("1.png","2.png","3.png","4.png","5.png","7.png","8.png","9.png","10.png","11.png","12.png");
backImage = loadImage("backgr.jpg");
hoop1 = loadImage("hoop1.png");

}

function setup() {
  createCanvas(800,400);

  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=8;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;


  player = createSprite(100,340,20,50);
  player.addAnimation("riding",player_riding);
  player.scale = 1;

  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  obstaclesGroup = createGroup();
}

function draw() {
  background(255,255,255);
  if(gameState===PLAY){

    if(backgr.x<0){
      backgr.x=backgr.width/2;
    }

      if(keyDown("space") ) {
        player.velocityY = -12;
      }
      player.velocityY = player.velocityY + 0.8;
    
      player.collide(ground);
    }  

    if(obstaclesGroup.isTouching(player)){
      gameState = END;
      backgr.setvelocityX=0;  
  }

if (gameState === END) {
    
 
    ground.velocityX = 0;
    player.velocityY = 0
  obstaclesGroup.setLifetimeEach(-1);
   obstaclesGroup.setVelocityXEach(0);
  
 }

    spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 100 === 0){
     obstacle=createSprite(900,265,10,40);
     obstacle.velocityX=-6;
    obstacle.lifetime=200;
    var rand=Math.round(random(1,6));  
    obstacle.addImage(hoop1);
    obstacle.scale=1;
    obstaclesGroup.add(obstacle);
     }
    }