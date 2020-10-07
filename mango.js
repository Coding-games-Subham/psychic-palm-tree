class Mango{
    constructor(x,y){
     var options = {
         isStatic:true,
         friction:1,
         restitution:0
     }
     this.r = 20;
     this.body = Bodies.circle(x,y,20,options);
     World.add(world,this.body);
     this.image = loadImage("Plucking mangoes/mango.png");
    }
    display(){
        var pos = this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,50,50);
    }
}