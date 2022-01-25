let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup(){
createCanvas(800,800);
bx = width/2.0;
by = height/2.0;
rectMode(RADIUS);
strokeWeight(2);
}


function draw(){
background(240)

if(mouseX > bx- boxSize && mouseX < bx + boxSize &&
 mouseY > by- boxSize && mouseY < by + boxSize) {

overBox = true;
if(!locked){
    stroke(255);
    fill(244,122,158);
   }
 } else{
     stroke(0);
     fill(0);
   overBox= false;  
 }
 rect(bx, by, boxSize, boxSize)

if(!locked) {
    stroke(255);
    fill(244,122,158);
} else{
    stroke(0);
    fill(0);
    overBox = false;

}
//rect(100, by, boxSize, boxSize)
}
function mousePressed(){
    if(overBox) {
        locked=true;
        fill(255,255,255);
} else { 
    locked = false;
}
 xOffset = mouseX - bx;
 yOffset = mouseY - by;
}
function mouseDragged() {
    if(locked) {
        bx = mouseX - xOffset;
        by = mouseY - yOffset;
    }
}

function mouseReleased() {
    locked = false;
}