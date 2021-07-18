var snowflake,snowI;
var bg;
var mjI;
var michael;

function preload() {
  snowI = loadImage("snow5.webp");
  bg = loadImage("snoii.webp");
  //mjI = loadAnimation("mj1.png" , "mj2.png" , "mj3.png");
}
function setup() {
  createCanvas(1350,625);
 
}

function draw() {
  background(bg);  

 //michael = createSprite(1200,300,50,50);
 //michael.addAnimation(mjI);

  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,1500), 0, 50, 50);
  snowflake.velocityX = -1;
  snowflake.velocityY = 5;
  snowflake.addImage(snowI);
  snowflake.scale = 0.1;
  }
}