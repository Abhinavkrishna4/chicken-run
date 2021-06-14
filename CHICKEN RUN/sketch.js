const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies
var randnumber;

 function setup() {
createCanvas(800,400);
coin = new Coin  (400,200);
player=new Player(100,100)
}

function draw() {
  background(255,255,255); 
  drawSprites();
  randnumber=Math.round(random(100,170));
if(frameCount % 5 === 0){
  
  coin.display();
 
}
if(frameCount % 50===0){
  hawk.display();

}
if(frameCount % 70===0){
  snakes.display();
}
if(keyDown(UP_ARROW)){
  player.body.setVelocityY(-2)
}
if(frameCount % 200===0){
  speedBoost.display();
}
if(frameCount % 352==0){
  shield.display();
}
}