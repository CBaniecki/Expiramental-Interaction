function setup () {
    createCanvas(800,800);
}

function draw(){
   background("#DC143C");
  
 
    push()
    rotate(mouseX/-200, mouseY/100);
    rect(200,200,100,100);
    pop();

    push()
    rotate(mouseX/-200, mouseY/200);
    rect(400,200,100,100);
    pop()
   
}



