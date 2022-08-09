var path, path2;
var boy, boy2;
var leftBoundary, rightBoundary;

function preload(){
  path2 = loadImage ("path.png");
  boy2 =loadAnimation ("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);


 
  path = createSprite(200,200,400,400);
path.addImage(path2);
path.velocityY=3;
path.scale=1.2;

boy = createSprite(200,200,20,20);
boy.addAnimation("andando",boy2);
boy.scale=0.8;




 leftBoundary=createSprite(-5,0,100,800);
leftBoundary.visible=false;

 rightBoundary=createSprite(415,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
  
  boy.x = World.mouseX;
  
  edges = createEdgeSprites();
  boy.collide(edges);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
