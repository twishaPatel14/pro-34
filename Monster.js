class Monster{
    constructor(x,y,r){
var options={
    density: 5, 
      frictionAir: 0,
      isStatic: true

}

this.x=x
this.x=x;
this.y=y;
this.r=r;
this.body= Bodies.circle(this.x,this.y,(this.r)/2,options);
this.image= loadImage("images/Monster-01.png")
World.add(world,this.body);
    }
 display(){
    var santaPos=this.body.position;		
    push()
    translate(santaPos.x, santaPos.y-100);
    rectMode(CENTER)
    fill(255,0,255)
    imageMode(CENTER);
    image(this.image, 0,0,this.r, this.r)
    pop()

 }
}