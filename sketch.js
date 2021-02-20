const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld,myEngine,ball,dustbin;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;
  
  ball = new Paper(200,200,80);
  dustbin = new Dustbin(width-100,height-20);

  ground = new Ground(width/2,height-10,width,10);

  var  render = Matter.Render.create({
    element: document.body,
    engine: myEngine,
    options: {
      width: 1200,
      height: 400,
      wireframes: false
    }
  })
  Matter.Render.run(render);
}

function draw() {
  background("white");  

  Engine.update(myEngine);
  //console.log(dustbin.leftWall.restitution);
  ball.display();
  dustbin.display();
  

  ground.display();

}

function keyPressed(){
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-4.75});
  
  }
  
}