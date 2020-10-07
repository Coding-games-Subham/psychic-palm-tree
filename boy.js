class Boy{
    constructor(){
        
this.image = loadImage("boy.png");
       
    }
    display(){
     
      imageMode(CENTER);
        image(this.image, 200,600,200,200);
    }
}
