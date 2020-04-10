var sun;
var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8;


function setup() {
  createCanvas(1200,600);
  sun = createSprite(600,300,30,30);
  planet1 = createSprite(600,220,10,10);
  planet2 = createSprite(600,180,10,10);
  planet3 = createSprite(600,140,10,10);
  planet4 = createSprite(600,100,10,10);
  planet5 = createSprite(600,380,10,10);
  planet6 = createSprite(600,420,10,10);
  planet7 = createSprite(600,460,10,10);
  planet8 = createSprite(600,500,10,10);
}

function draw() {
  background("white");
  
  if(sun.height <= 400 && sun.width <= 400){
    if(World.frameCount % 40 === 0) {
      sun.width = sun.width + 10;
      sun.height = sun.height + 10;
    }
  }

  if(sun.isTouching(planet1)) {
    planet1.visible = false;
  }

  if(sun.isTouching(planet2)) {
    planet2.visible = false;
  }

  if(sun.isTouching(planet3)) {
    planet3.visible = false;
  }

  if(sun.isTouching(planet4)) {
    planet4.visible = false;
  }

  if(sun.isTouching(planet5)) {
    planet5.visible = false;
  }

  if(sun.isTouching(planet6)) {
    planet6.visible = false;
  }

  if(sun.isTouching(planet7)) {
    planet7.visible = false;
  }

  if(sun.isTouching(planet8)) {
    planet8.visible = false;
  }
  drawSprites();
}

