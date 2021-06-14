class Shield{
    constructor(x,y,width,height){
       super(x,y,width,height) ;
     this.body=Bodies.rectangle(x,y,width,height);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
     this.image=loadImage("sprites/shield.png");


    }
    display(){
       var pos=this.body.position;
       rect(pos.x,pos.y,this.width,this.height);
       image(this.image,0,0,this.width,this.height);
    }

}