class Chicken{
    constructor(x,y,){
       
    super(x,y,50,50);
    
    this.body=Bodies.rectangle(x,y,width,height)
    this.width=width;
    this.height=height

    World.add(this.boby);
    this.image=loadImage("sprites/chicken.jpg");
    }
    display(){
rectMode(CENTER);
var pos = this.body.position;
rect(pos.x,pos.y,this.width,this.height);
image(this.image,0,0,this.width,this.height);

    }
}