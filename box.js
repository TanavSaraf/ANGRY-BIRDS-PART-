class Box
{
   constructor(x,y,width,height)
   {
            
       this.body=Bodies.rectangle(x,y,width,height,{restitution:0.4,friction:1.9,density:1});
       this.width=width;
       this.height=height;
       World.add(world,this.body);
       console.log(this.body);
   } 
   display()
   {
      var  posi = this.body.position;
      push()
      rectMode(CENTER);
      fill("brown");
      translate(posi.x,posi.y);
      rotate(this.body.angle);
      rect(0,0,this.width,this.height);
      pop()
   }
}
