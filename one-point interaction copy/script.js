

function preload() {
    spending = loadJSON("spending.json");
}

function setup(){
    createCanvas(500,500);

}

function draw(){
    background(0);

    fill(spending.r, spending.g, spending.b);
    text(spending.store, 10,50);
}