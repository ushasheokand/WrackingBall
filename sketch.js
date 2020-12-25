
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5, box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;

var ground, ball, chain , bgImage;

function preload()
{
	bgImage= loadImage("images/bgImage.jpg");
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50,200,60);
	
	ground = new Ground(450,500,900,10);
	
	// create rows of boxes
	box1 = new Box(450,500,50,50);
	box2 = new Box(450,450,50,50);
	box3 = new Box(450,400,50,50);
	box4 = new Box(450,350,50,50);
	box5 = new Box(450,300,50,50);
	box6 = new Box(450,250,50,50);
	box7 = new Box(450,200,50,50);
	box8 = new Box(450,150,50,50);
	box9 = new Box(450,100,50,50);
	box10 = new Box(450,50,50,50);


	box11 = new Box(550,500,50,50);
	box12 = new Box(550,450,50,50);
	box13 = new Box(550,400,50,50);
	box14 = new Box(550,350,50,50);
	box15 = new Box(550,300,50,50);
	box16 = new Box(550,250,50,50);
	box17 = new Box(550,200,50,50);
	box18 = new Box(550,150,50,50);
	box19 = new Box(550,100,50,50);
	box20 = new Box(550,50,50,50);

	box21 = new Box(650,500,50,50);
	box22 = new Box(650,450,50,50);
	box23 = new Box(650,400,50,50);
	box24 = new Box(650,350,50,50);
	box25 = new Box(650,300,50,50);
	box26 = new Box(650,250,50,50);
	box27 = new Box(650,200,50,50);
	box28 = new Box(650,150,50,50);
	box29 = new Box(650,100,50,50);
	box30 = new Box(650,50,50,50);
	 

	// create constraint object
	chain = new Chain(ball.body, {x:300, y:50});
	Engine.run(engine);
  
}


function draw() {
  
  background(bgImage);

  Engine.update(engine);
  
  // Since we are using a background image with a ground, 
  // Skip displaying Ground Object.
 // ground.display();

  ball.display();
  chain.display();  
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  // cosmetic things
  push()
  strokeWeight(1);
  fill("yellow");
  ellipseMode(CENTER);
  ellipse(300,50,20,20);       
  pop();
}

function mouseDragged()
{	 
	Matter.Body.setPosition(ball.body , {x: mouseX , y:mouseY});
}

