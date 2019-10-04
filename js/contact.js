var emote_img = [];
function preload(){
	emote_img[0] = loadImage('../img/contact/1.png');
	emote_img[1] = loadImage('../img/contact/2.png');
	emote_img[2] = loadImage('../img/contact/3.png');
	emote_img[3] = loadImage('../img/contact/4.png');
	emote_img[4] = loadImage('../img/contact/5.png');
	emote_img[5] = loadImage('../img/contact/6.png');
	emote_img[6] = loadImage('../img/contact/7.png');
	emote_img[7] = loadImage('../img/contact/8.png');
	emote_img[8] = loadImage('../img/contact/9.jpg');
	emote_img[9] = loadImage('../img/contact/10.png');
	emote_img[10] = loadImage('../img/contact/11.png');
	emote_img[11] = loadImage('../img/contact/12.png');
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function emote(x,y,img){
	this.x = x;
	this.y = y;
	this.xspeed = floor(random(-4,4));
	this.yspeed = floor(random(-4,4));
	this.img = img.resize(30,40);
	this.display = function(){
		image(img,this.x,this.y);
	}
	this.update = function(){
		if(this.x+30 > width || this.x < 0){
			this.xspeed = this.xspeed * -1;
		}
		if (this.y+40 > height || this.y < 0){
			this.yspeed = this.yspeed * -1;
		}
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}
}
var emotes = [];
function setup(){
	var canvas= createCanvas(windowWidth,windowHeight);
	canvas.parent('sketch1');
	for (i = 0; i <= 60 ; i++){
		var test = new emote(floor(random(width-30)),floor(random(height-40)),random(emote_img));
		emotes.push(test);
		bg = loadImage('img/contact/bg.jpg');
	}
}
var count = emotes.length;

//This is just how they take the frame buffer
//I have try with for loop and it was not working
function draw(){
	background(bg);
	/*for(var i =0;i < count;i++){
	emotes[i].update();
	emotes[i].display();
	}*/
	emotes[0].update();
	emotes[0].display();
	emotes[1].update();
	emotes[1].display();
	emotes[2].update();
	emotes[2].display();
	emotes[3].update();
	emotes[3].display();
	emotes[4].update();
	emotes[4].display();
	emotes[5].update();
	emotes[5].display();
	emotes[6].update();
	emotes[6].display();
	emotes[7].update();
	emotes[7].display();
	emotes[8].update();
	emotes[8].display();
	emotes[9].update();
	emotes[9].display();
	emotes[10].update();
	emotes[10].display();
	emotes[11].update();
	emotes[11].display();
	emotes[12].update();
	emotes[12].display();
	emotes[13].update();
	emotes[13].display();
	emotes[14].update();
	emotes[14].display();
	emotes[15].update();
	emotes[15].display();
	emotes[16].update();
	emotes[16].display();
	emotes[17].update();
	emotes[17].display();
	emotes[18].update();
	emotes[18].display();
	emotes[19].update();
	emotes[19].display();
	emotes[20].update();
	emotes[20].display();
	emotes[21].update();
	emotes[21].display();
	emotes[22].update();
	emotes[22].display();
	emotes[23].update();
	emotes[23].display();
	emotes[24].update();
	emotes[24].display();
	emotes[25].update();
	emotes[25].display();
	emotes[26].update();
	emotes[26].display();
	emotes[27].update();
	emotes[27].display();
	emotes[28].update();
	emotes[28].display();
	emotes[29].update();
	emotes[29].display();
	emotes[30].update();
	emotes[30].display();
	emotes[31].update();
	emotes[31].display();
	emotes[32].update();
	emotes[32].display();
	emotes[33].update();
	emotes[33].display();
	emotes[34].update();
	emotes[34].display();
	emotes[35].update();
	emotes[35].display();
	emotes[36].update();
	emotes[36].display();
	emotes[37].update();
	emotes[37].display();
	emotes[38].update();
	emotes[38].display();
	emotes[39].update();
	emotes[39].display();
	emotes[40].update();
	emotes[40].display();
	emotes[41].update();
	emotes[41].display();
	emotes[42].update();
	emotes[42].display();
	emotes[43].update();
	emotes[43].display();
	emotes[44].update();
	emotes[44].display();
	emotes[45].update();
	emotes[45].display();
	emotes[46].update();
	emotes[46].display();
	emotes[47].update();
	emotes[47].display();
	emotes[48].update();
	emotes[48].display();
	emotes[49].update();
	emotes[49].display();
	emotes[50].update();
	emotes[50].display();
	emotes[51].update();
	emotes[51].display();
	emotes[52].update();
	emotes[52].display();
	emotes[53].update();
	emotes[53].display();
	emotes[54].update();
	emotes[54].display();
	emotes[55].update();
	emotes[55].display();
	emotes[56].update();
	emotes[56].display();
	emotes[57].update();
	emotes[57].display();
	emotes[58].update();
	emotes[58].display();
	emotes[59].update();
	emotes[59].display();
	emotes[60].update();
	emotes[60].display();
}