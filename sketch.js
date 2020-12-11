const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var  slingshot;


var gameState = "onSling";

function preload() {
    //getTime();
    polygonimg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    stand1 = new Stand(390,300,250,10);
    box9 = new Box (300,275,40,50)
    box10 = new Box (330,275,40,50)
    box11 = new Box (360,275,40,50)
    box12 = new Box (390,275,40,50)
    box13 = new Box (330,235,40,50)
    box14 = new Box (360,235,40,50)
    box15 = new Box (390,235,40,50)
    box16 = new Box (360,195,40,50)

    
    stand2 = new Stand(700,200,200,10);
    box1 = new Box(640,175,30,40);
    box2 = new Box(670,175,30,40);
    box3 = new Box(700,175,30,40);
    box4 = new Box(730,175,30,40);
    box5 = new Box(670,135,30,40);
    box6 = new Box(700,135,30,40);
    box7 = new Box(730,135,30,40);
    box8 = new Box(700,95,30,40);
    
    polygon = Bodies.circle(50,200,20)
    World.add (world,polygon)

         //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
   
}

function draw(){
    if(backgroundImg);
    background(255);
    textSize(35);
    text("score:"+score,100,50)
    Engine.update(engine);
    ground.display();
    strokeWeight(4);
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

    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,40,40)
    

       //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
/*async function getTime(){
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJson = await response.json()
    console.log(responseJson);
    var datetime = responseJson.datetime
    var hour = datetime.slice(11,13);
    if(hour>=06 && hour<=19){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg);
}*/
