var posX;
var posY;
let p=[];
var num=120;
var radio=10;
let c=[4];
function setup() {
  createCanvas(windowWidth, windowHeight);
  posX=width/2;
	posY=height/2;
  for(var i=0;i<num;i+=1){
   	 p[i]=new shape(posX,posY,10,i,random(0.2,2),random(100,600));
  }
  c[0]=color(231,51,50);
  c[1]=color(186,37,56);
  c[2]=color(31,48,90);
  c[3]=color(241,61,57);
  background(31,48,90);
}

function draw() {
  background(31,48,90,4);

  for(var i=0;i<num;i+=1){
   	 p[i].display();
     p[i].update();
  }
  strokeWeight(0.4);
  for(var i=0;i<num-1;i+=1){
   	line(p[i].sPosX,p[i].sPosY,p[i+1].sPosX,p[i+1].sPosY);
  }
  line(p[0].sPosX,p[0].sPosY,p[num-1].sPosX,p[num-1].sPosY);
}
class shape{
  constructor(_posX,_posY,_radio,_angle,speed,_amplitud){
    this.posX=_posX;
    this.posY=_posY;
    this.radio=_radio;
    this.angle=_angle;
    this.direction=1;
    this.speed=speed;
    this.sPosX=0;
    this.sPosY=0;
    this.amplitud=_amplitud;
    this.c=['#E73332','#BA2538','#F13D39','#F14039','#F11C39','#BA2551','#BA2500'];
  	this.cPick=0;
  }
  display(){
  	this.sPosX=(sin(this.angle)*this.radio)+this.posX;
    this.sPosY=(cos(this.angle)*this.radio)+this.posY;
    //fill(color(this.c[this.cPick]));
    stroke(color(this.c[this.cPick]));
    //noFill();
   	//ellipse((sin(this.angle)*this.radio)+this.posX,(cos(this.angle)*this.radio)+this.posY,20,20);
    strokeWeight(0.1);
    //line((sin(this.angle)*this.amplitud)+this.posX,(cos(this.angle)*this.amplitud)+this.posY,(sin(this.angle)*10)+this.posX,(cos(this.angle)*10)+this.posY);
  }
  update(){
    this.radio=this.radio+(this.speed*this.direction);
    if(this.radio>this.amplitud){
      this.direction*=-1;
    }
    if(this.radio<1){
      this.cPick=int(random(0,6));
      this.radio=1;
      this.amplitud=random(100,400);
      this.speed=random(0.2,1);
      this.direction*=-1;
    }
  }
}
