var path,shinchan,chocobie1,chocobie2,chocobie3,mitsi;
var pathImg,shinchanImg,chocobie1Img,chocobie2Img,chocobie3Img,mitsiImg;
var chocobeeCollection = 0;
var chocobie1G,chocobie2G,chocobie3G,mitsiGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
 shinchanImg = loadAnimation("shinchan-1.png.png","shinchan-2.png.png",'shinchan-3.png.png');
  chocobie1Img = loadImage("chocobie-1.png.png");
  chocobie2Img = loadImage("chocie2-1.png.png");
  chocobie3Img = loadImage("chocobie3-1.png.png");
  mitsiImg = loadImage("MITSI-1.png.png");
  endImg =loadAnimation("end.png");

}

function setup(){
  
   createCanvas(windowWidth, windowHeight);

path=createSprite(windowWidth/2,windowHeight/2);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
shinchan = createSprite(70,580,20,20);
shinchan.addAnimation("ShinchanRunning",shinchanImg);
shinchan.scale= 0.5;
shinchan.setCollider("rectangle",0,0,shinchan.width/2,shinchan.height/2);
  shinchan.debug = false;
  
  
  chocobie1G=new Group();
 chocobie2G=new Group();
 chocobie3G=new Group();
 mitsiGroup=new Group();


}

function draw() {

  if(gameState===PLAY){
  background(0);
  shinchan.x = World.mouseX;
  
  edges= createEdgeSprites();
 shinchan.collide(edges);
  
  //code to reset the backgrounds
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createchocobie1();
    createchocobie2();
    createchocobie3();
    createMitsi();

    if (chocobie1G.isTouching(shinchan)) {
      chocobie1G.destroyEach();
      chocobeeCollection=chocobeeCollection+50;
    }
    else if (chocobie2G.isTouching(shinchan)) {
      chocobie2G.destroyEach();
      chocobeeCollection=chocobeeCollection+100;
      
    }else if(chocobie3G.isTouching(shinchan)) {
      chocobie3G.destroyEach();
      chocobeeCollection=chocobeeCollection + 150;
      
    }else{
      if(mitsiGroup.isTouching(shinchan)) {
        gameState=END;
        
        shinchan.addAnimation("ShinchanRunning",endImg);
        shinchan.x= windowWidth/2;
        shinchan.y=300;
        shinchan.scale=0.6;
        
        chocobie1G.destroyEach();
        chocobie2G.destroyEach();
        chocobie3G.destroyEach();
        mitsiGroup.destroyEach();
        
        chocobie1G.setVelocityYEach(0);
        chocobie2G.setVelocityYEach(0);
        chocobie3G.setVelocityYEach(0);
        mitsiGroup.setVelocityYEach(0);
      
      
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("chocochips : "+ chocobeeCollection,150,30);
  }

}

function createchocobie1() {
  if (World.frameCount % 110 == 0) {
  var chocobie1 = createSprite(Math.round(random(50,windowWidth),40, 10, 10));
  chocobie1.addImage(chocobie1Img);
  chocobie1.scale=0.13;
  chocobie1.velocityY = 3;
  chocobie1.lifetime = 1000;
  chocobie1G.add(chocobie1);
  }
}

function createchocobie2() {
  if (World.frameCount % 220 == 0) {
  var chocobie2 = createSprite(Math.round(random(50, windowWidth),40, 10, 10));
  chocobie2.addImage(chocobie2Img);
  chocobie2.scale=0.18;
  chocobie2.velocityY = 3;
  chocobie2.lifetime = 1000;
  chocobie2G.add(chocobie2);
}
}

function createchocobie3() {
  if (World.frameCount % 280 == 0) {
  var chocobie3 = createSprite(Math.round(random(50, windowWidth),40, 10, 10));
  chocobie3.addImage(chocobie3Img);
  chocobie3.scale=0.1;
  chocobie3.velocityY = 3;
  chocobie3.lifetime = 1000;
  chocobie3G.add(chocobie3);
  }
}

function createMitsi(){
  if (World.frameCount % 330 == 0) {
  var mitsi= createSprite(Math.round(random(50, windowWidth),40, 10, 10));
  mitsi.addImage(mitsiImg);
  mitsi.scale=0.3;
  mitsi.velocityY = 3;
  mitsi.lifetime = 1500;
  mitsiGroup.add(mitsi);
  }
}