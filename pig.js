class Pig
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.2,
            density:1,
            friction:1.8,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    
    }
    display()
    {
        var pos =this.body.position;
        push()
        fill("green");
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop()
    }
}