//Create variables here
var dog,happydDog
var database,foodStock,foodS;

function preload(){
  //load images here
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  var canvas = createCanvas(1000,700);
  database = firebase.database();
  foodStock = database.ref('food');
  //foodStock.on("value",readStock);
  dog = createSprite(420,350,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  //writeStock(foodS);
  dog.addImage(dogimg2);
}
  drawSprites();
  //add styles here
  fill("blue");
  textSize(32);
  stroke(100);
  text("PRESS UP ARROW KEY TO FEED DRAGO MILK and CHOCOLATE",10,100);
     
  
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}


