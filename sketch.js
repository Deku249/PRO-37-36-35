var dog, happyDog, database, foodS, foodStock
var dogIm, happyDogIm
function preload()
{
   //dogIm.loadImage = "images/dogImg1.png"
   //happydogIm.loadImage = "images/dogImg.png"
}

function setup() 
{
	createCanvas(500,500);
  dog = createSprite(100,100,50,50)
  dog.shapeColour ="red"
}


function draw() 
{  
  background(125)
  drawSprites();
  //add styles here

}



