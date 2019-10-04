class Snake{
  constructor(object){
  this.obj = object;
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
}
  eat(pos) {
    var d = this.obj.dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  death() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = this.obj.dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }

  update() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = this.obj.createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * this.obj.scl;
    this.y = this.y + this.yspeed * this.obj.scl;

    this.x = this.obj.constrain(this.x, 0, this.obj.canvas.width - this.obj.scl);
    this.y = this.obj.constrain(this.y, 0, this.obj.canvas.height - this.obj.scl);
  }

  show() {
    this.obj.fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      this.obj.image(this.obj.head,this.tail[i].x, this.tail[i].y, this.obj.scl, this.obj.scl);
    }
    this.obj.image(this.obj.head,this.x, this.y, this.obj.scl, this.obj.scl);

  }
}