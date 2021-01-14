class Bird
{
    constructor(x,y,width,height)
    {
        var options ={
            restitution:0.3,
            friction:0.9,
            density:1,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display()
    {
       var  posi = this.body.position;
       push()
       rectMode(CENTER);
       fill("red");
       translate(posi.x,posi.y);
       rotate(this.body.angle);
       rect(0,0,this.width,this.height);
       pop()
    }
}