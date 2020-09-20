//Create variables here
var dogImg1,dogImg2;
var dog;
var db;
var foodStock;

function preload()
{
  dogImg1=loadImage("images/dogImg.png");
  dogImg2=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(800, 700);
  db = firebase.database();
  dog = createSprite(200,350,150,150);
  dog.addImage(dogImg1);
  dog.scale = 0.5;
  var foodref = db.ref("Food");
  
  foodref.on("value",(data)=>{
    foodStock = data.val();
  })
}


function draw() {  
  background("black");
  textSize(25);
  text(foodStock,400,350);
  if(keyDown("UP_ARROW"))
  {
    foods = foodStock-1;
    writeStock(foods);
    dog.addImage(dogImg2);
  }
  drawSprites();
  //add styles here

}
function writeStock(foods)
{
  db.ref("/").update({
    "Food":foods
  });
}


