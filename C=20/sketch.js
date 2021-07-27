var movingSquare,fixedSquare


function setup() {
  createCanvas(800,400);
  movingSquare=createSprite(400, 200, 50, 50);
  fixedSquare =createSprite(400,300,50,50);
}

function draw() {
  background(0);  
  movingSquare.shapeColor="green"
  fixedSquare.shapeColor="green"
  movingSquare.x=World.mouseX
  movingSquare.y=World.mouseY
  if(fixedSquare.x-movingSquare.x<movingSquare.width/2+fixedSquare.width/2
    &&fixedSquare.y-movingSquare.y<movingSquare.height/2+fixedSquare.height/2
    &&movingSquare.x-fixedSquare.x<movingSquare.width/2+fixedSquare.width/2&&
    movingSquare.y-fixedSquare.y<movingSquare.height/2+fixedSquare.height/2){
    movingSquare.shapeColor="red"
    fixedSquare.shapeColor="red"
  }
  drawSprites();
}