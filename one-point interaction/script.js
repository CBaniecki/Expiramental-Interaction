function setup () {
    createCanvas(800,800);
}

function draw(){
    background("#DC143C");

    push()
    translate(mouseX);
    rotate(mouseX/200);
    rect(200,200, 100,100);
    pop();
 
}


