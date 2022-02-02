
var products = [
    "Shirt",
    "Jacket",
    "Candy",
    "Blanket"
];

//const display = [
//    products.push("Hello")
//];

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
    text(products[2], 200,200);
    text(products[0], 300, 400);
    text(products[1], 350, 250);
    text(products[3], 400, 100);

   // text(display[0], 200, 100);

    //stroke(0);
    //noFill();
    //rect(50, 50, 100,300);
}

function mousePressed(){
    products.pop();
}


