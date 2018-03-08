var j = 0;
var hidden = 11;
var pi = 3.141592

function setup() {
    
}
  
function draw(){
    if (flag === 1){
        //FONDO
        createCanvas(720, 400);
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
        $("#modal-canvas").append($("#defaultCanvas0"));
    }

    if (flag === 2){
        frameRate(9);
        createCanvas(720, 400);
        background(191);
        fill(0);
        rect(355,199,10,2);
        fill(0);
        rect(359,195,2,10);

        drawCircles();

        hidden = hidden - 1;

        if (hidden < 0){
            hidden = 11;
        }
        $("#modal-canvas").append($("#defaultCanvas0"));
    }

    if (flag === 3){
        createCanvas(720, 400);
        var accumulatedX = -25;
        var accumulatedY = -35;
        while (accumulatedY < 400){
            while (accumulatedX < 720){
            fill(0);
            rect(accumulatedX, accumulatedY, 50, 50);
            accumulatedX = accumulatedX + 60;
            }
            accumulatedY = accumulatedY + 60;
            accumulatedX = -25;
        }
        $("#modal-canvas").append($("#defaultCanvas0"));
    }
}
  
function drawLilac (){
    
}

function drawCircles() {
    noStroke();
    fill(182, 102, 210, 40);
    var angle = 360.0/12.0;
    for (var i = 0; i < 12; i++) {
        if (i != hidden){
            ellipse(150 * sin(angle * i * pi /180 ) + 360, 150 * cos(angle * i * pi / 180) + 200, 40, 40);
        }
    }
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