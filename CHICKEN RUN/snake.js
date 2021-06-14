class Snakes{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("sprites/snake.jpeg")
    }

    display(){
     var pos = this.body.position;
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
     image(this.image,0,0,this.width,this.height);
     

    }
}