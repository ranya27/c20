var a,b;



function setup() {
  createCanvas(1200,800);
  a= createSprite(200, 200, 50, 80);
  a.shapeColor="green";
  b= createSprite(400,200,80,30);
  b.shapeColor="green";
a.debug=true;
b.debug=true;


}

function draw() {
  background("white");
  
  

b.y=World.mouseY;
b.x=World.mouseX;
if(a.x-b.x<a.width/2+b.width/2)
{
  a.shapeColor="red"
  b.shapeColor="red"
}
else{
  a.shapeColor="green"
  b.shapeColor="green"
}
  drawSprites();
}
