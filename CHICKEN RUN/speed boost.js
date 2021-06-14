class SpeedBoost{
    constructor(x,y,r){
 var options={
     restitution:0.5
 }
 this.r=r;

 this.body=Bodies.circle(x,y,this.r,options);
 World.add(world,this.body);
 this.image=loadImage("sprites/Speed_UP.png")
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;

  push();
translate(pos.x,pos.y);
rotate(angle);
image(this.image,0,0,this.width,this.height);
pop();
}
}