class Paddle {
    constructor(isLeft,height,width,object) {
        this.obj = object;
        this.originh= height;
        this.originw = width;
        this.y = height/2;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;
        
        if (isLeft) {
            this.x = this.w;
        } else {
            this.x = this.originw - this.w;
        }
           
    }
    reset(){
        this.y=height/2;
    }
    
    update() {
        this.y += this.ychange;
        this.y = this.obj.constrain(this.y, this.h/2, this.originh-this.h/2);
    }
    
    move(steps) {
        this.ychange = steps;
    }
    
    show() {
        this.obj.fill(255);
        this.obj.rectMode(this.obj.CENTER);
        this.obj.rect(this.x, this.y, this.w, this.h);
    }
}
