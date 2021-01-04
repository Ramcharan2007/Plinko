class Particles
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.1,
			friction:0,
			density:0.8
        }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.color=color(random(0,225),random(0,225),random(0,255));
		World.add(world, this.body);
	}
	display()
	{	
		var bobpos=this.body.position;		
		push()
		translate(bobpos.x, bobpos.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill(this.color);
		ellipse(0,0,this.r, this.r);
		pop()	
	}

}