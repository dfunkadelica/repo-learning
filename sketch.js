//hahahahaha i'm naichen
//hahhahahhahaah !!!!!!!
//console image from http://1.bp.blogspot.com/-nB3o9GgWUI8/VEqYhuiFWMI/AAAAAAAAEx4/ISeJTI-2MDg/s1600/Launching.jpg
//fish
var schoolSize = 25;
var fish;
var spawn = [];
var school;
var fishSize = 300;
var a = 0.0;
var inc; // space between the ellipses, to show ripples 
var imgSeal;
var imgConsole;
var boulder = [];
var rockNumber = 50;
var view;
function preload(){
imgSeal= loadImage("seal_transparency.png");
imgConsole = loadImage("Launching.png");
}

function rocks(){
  this.x = random(width);
  this.y = random(800, height);
  rockSize = random(100, 300);
    this.display = function(){
      fill(58, 68, 88, 200);
      ellipse(this.x, this.y, rockSize, rockSize);
      fill(126, 131, 131, 250);
      ellipse(this.x, this.y, rockSize/2, rockSize/3);
    
    }
}

function fish(){
  this.x = random(width);
  this.y = random(height);
  this.xdir = random(1, 3);
  this.ydir = random(-1, 1);
  fishSize = random(25, 35);
    this.display = function() {             //body of the fish
      fill(126, 185, 184, 100);
      ellipse(this.x, this.y, fishSize, fishSize/2);
      fill(255);
      stroke(4);
      line(this.x- 5, this.y, this.x+5, this.y);
      noStroke();
      fill(120, 180, 180, 100);
      triangle(this.x - fishSize/2, this.y - fishSize/3, this.x - fishSize/2 , this.y, this.x - 25, this.y + fishSize/3);
    }
    
    this.move = function(){             //swimming
      this.x = this.x + this.xdir;
      this.y = this.y + this.ydir + random(-1, 1);
      if (this.x > width + fishSize){
        this.x = 0 -fishSize;
        }
      
      if (this.y >= height || this.y <= 0){
        this.ydir = this.ydir * -1;
      }
      if (dist(mouseX, mouseY, this.x, this.y) < 70){
        this.xdir = this.xdir +8;
        this.ydir = random(-5,+5);
      }
      if (dist(mouseX, mouseY, this.x, this.y)> 100){
        this.xdir = random(1, 3); 
        this.ydir = random(-1, 1);
      }
    }
  }

function stems(x, y, dia) {
  for (var i = height; i > height-100; i -= 1) {
    noStroke();
    fill(60, 110, 60);    
    ellipse(x + sin(a), i, dia - (i * 0.009), dia - (i * 0.009));
    fill(70, 100, 50);
    ellipse(x + sin(a) + 75, i - 25, dia - (i * 0.009), dia + (i * 0.005));
    inc = 5; //why is it so unintuitive how this changes?
    inc++; //ziv helped me with this part 
    a += inc;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(var t = 0; t < rockNumber; t ++)
  boulder.push(
    new rocks(random(0, width), random(height))
    );
    
  for (var f = 0; f < schoolSize; f ++)
  spawn.push(
    new fish(random(0, width), random(800, height))
    );
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(imgSeal, mouseX, mouseY, 80, 50);
  for (var j = 10; j < windowWidth; j += 50) { //stems
    stems(j, 500, 5, 5); 
    }
  
  for(var r = 0; r < boulder.length; r++){
    boulder[r].display();
  }  
  
  for (var i = 0; i < spawn.length; i++){   
    spawn[i].display();
    spawn[i].move();
  }
 if (mouseIsPressed){
  view = view +10;
}  
 view = 0;
 imageMode(CORNER);
 image(imgConsole, 0, view, windowWidth+200, windowHeight+100); 


}


