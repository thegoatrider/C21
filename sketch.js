  var bullet,obstacle;
  var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  obstacle=createSprite(1200, 200, thickness,height/2);
  obstacle.shapeColor=color(80,80,80);
  bullet=createSprite(50,150,50,50);
  bullet.shapeColor="red";
  bullet.velocityX=speed;
 
}

function draw() {
  background(255,255,255);  
  
  //car.bounceOff(obstacle);
  if(obstacle.x-bullet.x < (bullet.width+bullet.width)/2){
    bullet.velocityX = 0;
    
    if(hascollided(bullet,obstacle)){
      bullet.velocityX=0
      var damage = 0.5* weight * speed * speed/(thickness*thickness*thickness)
    }
    if(damage>10)
    {
      obstacle.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      obstacle.shapeColor=color(0,255,0);
    }
  }
drawSprites();
}

function hascollided(lbullet,lobstacle){

  bulletRightEdge=lbullet.x+lbullet.width;
  obstacleLeftEdge=lobstacle.x;
  if(bulletRightEdge>=obstacleLeftEdge){
    return true
  }
return false;
}