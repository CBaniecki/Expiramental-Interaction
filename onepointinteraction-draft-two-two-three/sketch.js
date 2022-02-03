
var products = [
    "Shirt",
    "Jacket",
    "Candy",
    "Blanket"
];

//products.push("Hello")

var display = []

//console.log(display);

//products.pop();

//console.log(products);

function setup(){
    createCanvas(650,600);

}

function draw(){
    background(0);
    
    fill(255);
    textSize(20);
    text(products[2], 250,200);
    text(products[0], 300, 400);
    text(products[1], 350, 250);
    text(products[3], 400, 100);
    text(display[0], 50, 100);
    text(display[1], 50, 130);

    stroke(255);
    noFill();
    rect(30, 40, 150,300);
}

function mousePressed(){
    products.pop()
    display.push("Blanket")
    display.push("Candy")
    //display.push("Jacket")
    //display.push("Shirt")
}

//console.log(display);
