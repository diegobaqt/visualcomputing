function setup() {
  createCanvas(720, 400);
}

var j = 0;
function draw(){
  //FONDO
  background(0);
  noStroke();
  for (i=0;i<100;i+=2){
    rect(i*7.2,0,7.2,400);
  }
  
  //WORMS
  push();
  fill(0);
  translate((j/4) % 720, 50);
  rect(0,0,100,15);
  pop();
  
  push();
  fill(0);
  translate((100+j/4) % 720, 350);
  rect(0,0,100,15);
  pop();
  
  push();
  fill(0);
  translate((360+j/4) % 720, 30);
  rect(0,0,100,15);
  pop();
  
  push();
  fill(0);
  translate((520+j/4) % 720, 340);
  rect(0,0,100,15);
  pop();
  
  //PATOS
  push();
  fill(0);
  translate((j/4) % 720, 150);
  pato();
  pop();
  
  push();
  fill(0);
  translate((200+j/4) % 720, 50);
  pato();
  pop();
  
  push();
  fill(0);
  translate((370+j/4) % 720, 200);
  pato();
  pop();
  
  push();
  fill(0);
  translate((550+j/4) % 720, 70);
  pato();
  pop();
  
  j++;
}

function pato(){
  rect(60,0,45,45);//CARA
  rect(104,30,17,15);//PICO
  rect(59,45,38,70);//CUERPO
  rect(55,43,5,72);//1 espalda
  rect(0,98,60,17);//Espalda
  rect(14,84,46,17);//Espalda
  rect(28,70,32,17);//Espalda
  rect(42,56,18,17);//Espalda
  rect(55,115,15,40);//Pie |
  rect(69,147,15,8);//Pie _
}
