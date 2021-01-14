class Logs
{
  constructor(x,y,height,angles)
 {
    var options={
        restitution:0.2,
        friction:1.7,
        density:1
    }
   this.body=Bodies.rectangle(x,y,20,height,options);

   World.add(world,this.body);
   Matter.Body.setAngle(this.body,angles);
   this.height=height;
   this.width=20;

 }
 display()
 {
   var  pos=this.body.position;
   push()

   fill("brown");
   strokeWeight(3);
   stroke("black");
   translate(pos.x,pos.y);
   rotate(this.body.angle);
   rectMode(CENTER)
   rect(0,0,this.width,this.height);

   pop()

 }
}