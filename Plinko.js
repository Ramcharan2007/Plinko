class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0.1,
			friction:0,
			density:0.8
        }
		this.x=x;
		this.y=y;
		this.r=20
		this.body=Bodies.circle(this.x, this.y,this.r/2, options)
		World.add(world, this.body);
	}
	display()
	{	
		var bobpos=this.body.position;		
		push()
		translate(bobpos.x, bobpos.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill("white")
		ellipse(0,0,this.r,this.r);
		pop()	
	}

}