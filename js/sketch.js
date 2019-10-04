//////////////////////////////Welcome////////////////////////////
var welcome = function(p){
  p.font;
  p.vehicles = [];
  p.vehicles2 = [];
p.preload= function() {
  p.font = p.loadFont('data/AvenirNextLTPro-Demi.otf');
  p.bg = p.loadImage('bg.jpg');
}
p.windowResized = function() {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
}
p.setup = function() {
  p.canvas = p.createCanvas(p.windowWidth,p.windowHeight);
  p.canvas.parent('welcome');
  p.canvas.position(0,0);
  p.canvas.style('z-index','-1');


  var points = p.font.textToPoints("Welcome to my Portfolio", 100, 200, 100, {
    sampleFactor: 0.25
  });
  var points2nd = p.font.textToPoints("It's nice to see you", 100, 600, 100, {
    sampleFactor: 0.25
  });
for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y,p);
    p.vehicles.push(vehicle);
  }
for (var i = 0; i < points2nd.length; i++) {
    var pt = points2nd[i];
    var vehicle = new Vehicle(pt.x, pt.y,p);
    p.vehicles2.push(vehicle);
  }
}
p.draw = function() {
  p.background(p.bg);
  for (var i = 0; i < p.vehicles.length; i++) {
    var v = p.vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
  for (var i = 0; i < p.vehicles2.length; i++) {
    var v = p.vehicles2[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
}


//////////////////////////////Pong///////////////////////////////
var PongSketch = function(p){
    p.leftscore = 0;
    p.rightscore = 0;
    p.play = false;

p.setup = function() {
    p.canvas = p.createCanvas(600, 400);
    p.canvas.parent('pong');
    p.ding = p.loadSound("data/ding.mp3");
    p.puck = new Puck(p.canvas.width,p.canvas.height,p);
    p.left = new Paddle(true,p.canvas.height,p.canvas.width,p);
    p.right = new Paddle(false,p.canvas.height,p.canvas.width,p);
    p.button= p.createButton('play');
   /* p.again= p.createButton('reset');
    p.again.parent('pong');*/
    p.button.parent('pong');
    /*p.again.mousePressed(p.retard);*/
    p.button.mousePressed(p.change);
}
/*p.retard= function(){
  console.log(p.play);
  p.left.reset();
  p.right.reset();
  p.puck.reset();
  p.button.html('pause');
  p.play = false;
  p.leftscore = 0;
  p.rightscore = 0;
}*/
p.change = function(){
    if(p.play == false){
    p.button.html('pause');
    p.play = true;
}
    else if(p.play == true){
    p.button.html('play');
    p.play = false;
}
}
p.draw = function() {
    
    if(p.play){
    p.background(0);
    
    p.puck.checkPaddleRight(p.right);
    p.puck.checkPaddleLeft(p.left);

    p.left.show();
    p.right.show();
    p.left.update();
    p.right.update();
    
    p.puck.update();
    p.puck.edges();
    p.puck.show();
    
    p.fill(255);
    p.textSize(32);
    p.text(p.leftscore, 32, 40);
    p.text(p.rightscore, p.width-64, 40);
} else{
  p.background(0);
  p.left.show();
  p.puck.show();
  p.right.show();
  p.fill(255);
  p.textSize(32);
  p.text(p.leftscore, 32, 40);
  p.text(p.rightscore, p.width-64, 40);
}
}


p.keyReleased = function(){
    p.left.move(0);
    p.right.move(0);
}

p.keyPressed =  function() {
    console.log(p.key);
    if (p.key == 'A' || p.key == 'a') {
        p.left.move(-10);
    } else if (p.key == 'Z' || p.key == 'z') {
        p.left.move(10);
    }

    if (p.key == 'J' || p.key  == 'j') {
        p.right.move(-10);
    } else if (p.key == 'M' || p.key == 'm') {
        p.right.move(10);
    }
}
}
////////////////////////// Clock ///////////////////////////////////////////
var coolclock = function(p){
p.setup = function() {
   p.canvas=p.createCanvas(400, 400);
   p.canvas.parent('clock');
   p.angleMode(p.DEGREES);
 }

 p.draw = function() {
   p.background(0);
   p.translate(200, 200);
   p.rotate(-90);

   let hr = p.hour();
   let mn = p.minute();
   let sc = p.second();

   p.strokeWeight(8);
   p.stroke(255, 100, 150);
   p.noFill();
   let secondAngle = p.map(sc, 0, 60, 0, 360);
   p.arc(0, 0, 300, 300, 0, secondAngle);

   p.stroke(150, 100, 255);
   let minuteAngle = p.map(mn, 0, 60, 0, 360);
   p.arc(0, 0, 280, 280, 0, minuteAngle);

   p.stroke(150, 255, 100);
   let hourAngle = p.map(hr % 12, 0, 12, 0, 360);
   p.arc(0, 0, 260, 260, 0, hourAngle);
 
   p.push();
   p.rotate(secondAngle);
   p.stroke(255, 100, 150);
   p.line(0, 0, 100, 0);
   p.pop();

   p.push();
   p.rotate(minuteAngle);
   p.stroke(150, 100, 255);
   p.line(0, 0, 75, 0);
   p.pop();

   p.push();
   p.rotate(hourAngle);
   p.stroke(150, 255, 100);
   p.line(0, 0, 50, 0);
   p.pop();

   p.stroke(255);
   p.point(0, 0);

  p.fill(255);
  p.noStroke();
  p.text(hr + ':' + mn + ':' + sc, 10, 200);
 }}

////////////////////////  Snake /////////////////////////////////////////////

var SnakeSketch =  function(p){
    p.s;
    p.scl = 25;
    p.food;

p.setup = function() {
  p.canvas = p.createCanvas(600, 600);
  p.canvas.parent('snake');
  p.s = new Snake(p);
  p.frameRate(10);
  p.pickLocation();
  p.head = p.loadImage('img/portfolio/admiralbulldog.jpg')
}

p.pickLocation= function() {
  p.cols = p.floor(p.canvas.width/p.scl);
  p.rows = p.floor(p.canvas.height/p.scl);
  p.food = p.createVector(p.floor(p.random(p.cols)), p.floor(p.random(p.rows)));
  p.food.mult(p.scl);
}

p.mousePressed = function() {
  p.s.total++;
}

p.draw= function(){
  p.background(p.head);

  if (p.s.eat(p.food)) {
    p.pickLocation();
  }
  p.s.death();
  p.s.update();
  p.s.show();


  p.fill(255, 0, 100);
  p.image(p.head,p.food.x, p.food.y, p.scl, p.scl);
p.keyPressed = function() {
  if ( p.key == 'w' || p.key == 'W') {
    p.s.dir(0, -1);
  } else if ( p.key == 's' || p.key == 'S') {
    p.s.dir(0, 1);
  } else if ( p.key == 'd' || p.key == 'D') {
    p.s.dir(1, 0);
  } else if ( p.key == 'a' || p.key == 'A') {
    p.s.dir(-1, 0);
  }
}
}
}
/////////////////////////////////////////////////////////////////////
var pong = new p5(PongSketch);
var snake1 = new p5(SnakeSketch);
var intro = new p5(welcome);
var clock = new p5(coolclock);