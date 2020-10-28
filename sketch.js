var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "yellow"
  bouncedRect = createSprite(400,100,50,50);
  bouncedRect.shapeColor = "pink"
  bouncingRect = createSprite(400,300,50,50)
  bouncingRect.shapeColor = "green"
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue"
  bouncedRect.velocityY = 5
  bouncingRect.velocityY = -5
}

function draw() {
  background(0,0,0);  
  movingRect.y = World.mouseY
  movingRect.x = World.mouseX
  console.log(movingRect.width/2);
  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2)

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
  &&fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  &&movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  &&fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    ){
    movingRect.shapeColor = "red"

  }
  else {
    movingRect.shapeColor = "blue"

  }

  if(bouncedRect.x - bouncingRect.x < bouncedRect.width/2 + bouncingRect.width/2
    && bouncingRect.x - bouncedRect.x < bouncedRect.width/2 + bouncingRect.width/2){

bouncedRect.shapeColor = "green"
bouncingRect.shapeColor = "red"

bouncedRect.velocityX = bouncedRect.velocityX * -1;
bouncingRect.velocityX = bouncingRect.velocityX * -1;

  }

  if(bouncedRect.y - bouncingRect.y < bouncedRect.height/2 + bouncingRect.height/2
    && bouncingRect.y - bouncedRect.y < bouncedRect.height/2 + bouncingRect.height/2){

bouncedRect.shapeColor = "green"
bouncingRect.shapeColor = "red"

bouncedRect.velocityY = bouncedRect.velocityY * -1;
bouncingRect.velocityY = bouncingRect.velocityY * -1;

  }

  drawSprites();
}