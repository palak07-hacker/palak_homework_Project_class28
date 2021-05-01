
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1050,150,10);
	mango3=new mango(1200,200,20);
	mango4=new mango(1500,180,50);
	mango5=new mango(1300,190,38);
	mango6=new mango(1400,220,60);
    stoneObj = new stone(235, 420, 30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject = new launcher(stoneObj.body, {x:235, y:420})
	Engine.run(engine);
  
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stoneObj.display();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 launcherObject.display();
  groundObject.display();
  
  detectcollision(stoneObj, mango1);
  detectcollision(stoneObj, mango2);
  detectcollision(stoneObj, mango3);
  detectcollision(stoneObj, mango4);
  detectcollision(stoneObj, mango5);
  detectcollision(stoneObj, mango6);

}
 function mouseDragged(){
	 Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
 }

 function mouseReleased(){
	 launcherObject.fly();
 }

 function keyPressed(){
	 if(keyCode === 32){
     Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	 launcherObject.attach(stoneObj.body)
	 }
 }

 function detectcollision(lstone, lmango){
	 mangobodyposition = lmango.body.position;
	 stonebodyposition = lstone.body.position;
	 var distance = dist(stonebodyposition.x, stonebodyposition.y, mangobodyposition.x, mangobodyposition.y)
     
	 if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body, false)
	 }
}


 
