var j = 0;
var hidden = 11;
var pi = 3.141592;
var hiddenGrille = false;
var accumulatedCar = 0;
var direction = 0;
var istep = 300;
var step = 90;

//Var Figure 6
var direction = 0; 
var move = 0; 
var step = 0.5; //speed
var stop = 0;

//Var Figure 7
var step7 = 100;
var variable = -1;

function setup() {
    
}
  
function draw(){
    switch (flag){
        case 1:
            //FONDO
            createCanvas(720, 400);
            background(0);
            noStroke();
            for (i=0;i<150;i+=2){
                rect(i*6.5,0,6.5,400);
            }
            
            //WORMS

            fill(88);
            push();
            translate((j/4) % 720, 50);
            rect(0,0,100,15);
            pop();
            
            push();
            translate((100+j/4) % 720, 350);
            rect(0,0,100,15);
            pop();
            
            push();
            translate((360+j/4) % 720, 30);
            rect(0,0,100,15);
            pop();
            
            push();
            translate((520+j/4) % 720, 340);
            rect(0,0,100,15);
            pop();
            
            //PATOS
            fill(100);
            push();
            translate((j/4) % 720, 150);
            pato();
            pop();
            
            push();
            translate((200+j/4) % 720, 50);
            pato();
            pop();
            
            push();
            translate((370+j/4) % 720, 200);
            pato();
            pop();
            
            push();
            translate((550+j/4) % 720, 70);
            pato();
            pop();

            j+=2;
            $("#modal-canvas").append($("#defaultCanvas0"));
            break;
        case 2:
            frameRate(8);
            createCanvas(720, 400);
            background(191);

            drawCircles();
            fill(0);
            rect(355,199,10,2);
            fill(0);
            rect(359,195,2,10);

            hidden = hidden - 1;

            if (hidden < 0){
                hidden = 11;
            }
            $("#modal-canvas").append($("#defaultCanvas0"));
            break;
        case 3:
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
            break;
        case 4:
            createCanvas(720, 270);
            frameRate(40);
            background(242);
            noStroke();
            accumulated = 0;

            if (hiddenGrille){
                while (accumulated < 720){
                fill(12);
                rect(accumulated, 0, 15, 400);
                accumulated = accumulated + 32;
                } 
            }

            if (direction === 0){
                fill(242, 242, 0);
                rect(accumulatedCar, 80, 60, 25);
                accumulatedCar = accumulatedCar + 1; 

                fill(0, 0, 153);
                rect(accumulatedCar, 170, 60, 25);
                accumulatedCar = accumulatedCar + 1;
            } 
            
            if (direction === 1) {
                fill(242, 242, 0);
                rect(accumulatedCar, 80, 60, 25);
                accumulatedCar = accumulatedCar - 1; 

                fill(0, 0, 153);
                rect(accumulatedCar, 170, 60, 25);
                accumulatedCar = accumulatedCar - 1;
            }

            if (accumulatedCar >= 660){
                direction = 1;
            } else if (accumulatedCar <= 0) {
                direction = 0;
            }
            $("#modal-canvas").append($("#defaultCanvas0"));
            break;
        case 5:
            createCanvas(650, 450);
            background(255);
          if ( !mouseIsPressed ){
            push();
            strokeWeight(5);
            stroke(124, 126,125);
            for (i=25;i<450;i+=50){//Horizontal
              line(0, i, 700, i);
            }
            for (i=25;i<700;i+=50){ //Vertical
              line(i, 0, i, 450);
            }
            for (i=-25;i<1100;i+=100){ // /
              line(-25, i, i, -25);
            }
            for(i=0;i<500;i+=100){ // \
              line(0,i,450-i,450);
              line(i,0,450+i,450);
            }  
            for(i=500;i<700;i+=100){// \
              line(i,0,400+i,400);
            }
            pop();
          }
          
          strokeWeight(1);
          stroke(255);
          fill(0);
          for(i=0;i<700;i+=200){//points
            ellipse( 25+i,25, 10, 10 );  
            ellipse( 25+i,225, 10, 10 ); 
            ellipse( 25+i,425, 10, 10 ); 
          }
          $("#modal-canvas").append($("#defaultCanvas0"));
          break;
        case 6:
            frameRate(40);
            createCanvas(850, 400);
            background(255);
            noStroke();
               
          push(); //centers
          fill(225,104,0);
          ellipse( 250,200, 60, 60 ); 
          ellipse( 600,200, 60, 60 ); 
          pop();
          
          if( direction === 1) { //Move mode
            fill(112,193,179);
            ellipse( 450+(move*1),200, 130-move, 130-move );
            ellipse( 527+(move*0.35),320-(move*0.85), 130-move, 130-move );
            ellipse( 673-(move*0.35),320-(move*0.85), 130-move, 130-move );
            ellipse( 750-(move*1),200, 130-move, 130-move );
            ellipse( 527+(move*0.35),80+(move*0.85), 130-move, 130-move );
            ellipse( 673-(move*0.35),80+(move*0.85), 130-move, 130-move );
            if(move>80){ // vertical circles
               ellipse( 600,50+(move*1), 130-move, 130-move );
               ellipse( 600,350-(move*1), 130-move, 130-move );
            }    
            ellipse( 200,200, 30, 30 );
            ellipse( 215,235, 30, 30 );
            ellipse( 250,250, 30, 30 );
            ellipse( 285,235, 30, 30 );
            ellipse( 300,200, 30, 30 );
            ellipse( 285,165, 30, 30 );
            ellipse( 250,150, 30, 30 );
            ellipse( 215,165, 30, 30 );
          }
          
          if (stop===0){
            move=move+step;
          }else if(stop===30){
            stop=0;
            move=move+step;
          }
          
          if (move===100){
            step = -0.5;
            stop++;
          }else if(move===0){
            step = 0.5;
            stop++;
          }
          
          
          if( direction === 2) { // right big
            fill(112,193,179);
            ellipse( 100,200, 120, 120 );
            ellipse( 177,320, 120, 120 );
            ellipse( 323,320, 120, 120 );
            ellipse( 400,200, 120, 120 );
            ellipse( 177,70, 120, 120 );
            ellipse( 323,70, 120, 120 );
            
            ellipse( 550,200, 30, 30 );
            ellipse( 565,235, 30, 30 );
            ellipse( 600,250, 30, 30 );
            ellipse( 635,235, 30, 30 );
            ellipse( 650,200, 30, 30 );
            ellipse( 635,165, 30, 30 );
            ellipse( 600,150, 30, 30 );
            ellipse( 565,165, 30, 30 );
          }
          
          if( direction === 0) { //left big
            fill(112,193,179);
            ellipse( 450,200, 120, 120 );//250 | 100
            ellipse( 527,320, 120, 120 );//177
            ellipse( 673,320, 120, 120 );//323
            ellipse( 750,200, 120, 120 );//400
            ellipse( 527,70, 120, 120 );//177
            ellipse( 673,70, 120, 120 );//323
            
            ellipse( 200,200, 30, 30 );//650 - 600
            ellipse( 215,235, 30, 30 );//615
            ellipse( 250,250, 30, 30 );//650
            ellipse( 285,235, 30, 30 );//685
            ellipse( 300,200, 30, 30 );//700
            ellipse( 285,165, 30, 30 );//685
            ellipse( 250,150, 30, 30 );//650
            ellipse( 215,165, 30, 30 );//615
          }
          $("#modal-canvas").append($("#defaultCanvas0"));
          break;
        case 7:
            createCanvas(400,400);  
            frameRate(10);
            background (255,255,255);
          stroke(0,0,0);
          strokeWeight(2);
          var i;
          for (i=0;i<=height;i=i+step7)
          {
             line (0,i,width,height-i);
          }      
          for (i=0;i<=width;i=i+step7)
          {
             line (i,0,width-i,height);
          }
          stroke(255,0,0);
          strokeWeight(5);

          line (0,height/3,width, height/3);
          line (0,2*height/3,width, 2*height/3);
          fill(0, 102, 153);
          noStroke();    
          
          if (step7===30){
            variable7 = 1;
          }
          if (step7===100){
            variable7 = -1;
          }
          step7 = step7 + variable7;
          $("#modal-canvas").append($("#defaultCanvas0"));
          break;
    }
}

mouseClicked = function() {
    if (flag === 4)
        hiddenGrille = !hiddenGrille;
    if (flag === 5 && step > 20){
        step = step - 5;
    }
    if (flag == 6){
        direction++;
        direction= direction%3;
    }
};

function drawCircles() {
    noStroke();
    fill(182, 102, 210, 70);
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



var ilusionOptica = function (s) {
    var istep=300;
    var step=istep;  
  

    draw=function()
    {
        createCanvas(720,270);  
        frameRate(15);
        istep = width/3;
        step = istep;

      background (255,255,255);
      stroke(0,0,0);
      strokeWeight(2);

      for (var i = 0; i <= 270; i = i + step)
      {
         line (0,i,s.width,s.height-i);
      }      
      for (var i=0 ; i <= 720; i = i + step)
      {
         line (i, 0, 720 - i, height);
      }
      stroke(255,0,0);
      strokeWeight(5);
  
      line (0,s.height/3,s.width, s.height/3);
      line (0,2*s.height/3,s.width, 2*s.height/3);
      fill(0, 102, 153);
      noStroke();    
    }
    
    mousePressed=function() {
      if (step>20) {step--;}
    }
  }