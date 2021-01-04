
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinko = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
	createCanvas(480,650);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(480/2,650-10,480*2,20);

	for(var k=0; k<=width ; k = k+80)
	{
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
	}

	for(var j=40 ; j<=width ; j=j+50)
	{
		plinko.push(new Plinko(j,75));
	}

	for(var j=15 ; j<=width ; j=j+50)
	{
		plinko.push(new Plinko(j,175));
	}
	
	for(var j=40 ; j<=width ; j=j+50)
	{
		plinko.push(new Plinko(j,275));
	}

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();

	if(frameCount%60===0)
	{
		particles.push(new Particles(random(width/2-10,width/2+10),10,20));
	}

	for(var a=0 ;a<plinko.length;a++)
	{
		plinko[a].display();
	}

	for(var z=0;z<divisions.length;z++)
	{
		divisions[z].display();
	}

	for(var v=0;v<particles.length;v++)
	{
		particles[v].display();
	}

	drawSprites();
}



