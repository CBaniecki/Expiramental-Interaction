
var products = [
    "Shirt",
    "Jacket",
    "Candy",
    "Blanket",
    "Lip Balm",
    "Plushie",
    "Seasonal Gifts",
    "Trail Mix"
];

var display = []

//console.log(display);

//products.pop();

//console.log(products);

function setup(){
    createCanvas(650,600);
}

function draw(){
    background(250, 0, 0);
    
    fill(255);
    noStroke();
    rect( 230, 120, 100, 75);
    rect( 230, 220, 100, 75);
    rect( 370, 120, 100, 75);
    rect( 370, 220, 100, 75);
    rect( 510, 120, 100, 75);
    rect( 510, 220, 100, 75);
    rect( 230, 320, 180, 75);
    rect( 455, 320, 160, 75);


    //stroke(255);
    fill(255)
    rect(20, 40, 190,450);


    fill(255);
    textSize(25);
    text('Impulsive Target Buys', 300, 45);
    
    fill(255);
    textSize(15);
    text('click the mouse to remove products and add them to reciept', 230, 90)

    fill(0);
    noStroke()
    textSize(20);
   
    text(products[0], 395, 260);
    text(products[2], 250, 160);
    text(products[1], 250, 260);
    text(products[3], 390, 160);
    text(products[4], 524, 160);
    text(products[5], 530, 260);
    text(products[6], 250, 365);
    text(products[7], 490, 365);

    text(display[0], 40, 100);
    text(display[1], 140, 100);
    text(display[2], 40, 130);
    text(display[3], 140, 130);
    text(display[4], 40, 160);
    text(display[5], 140, 160);
    text(display[6], 40, 190);
    text(display[7], 140, 190);
    text(display[8], 40, 220);
    text(display[9], 140,220);
    text(display[10], 40, 250);
    text(display[11], 140, 250);
    text(display[12], 40, 280);
    text(display[13], 140, 280);
    text(display[14], 40, 310);
    text(display[15], 140, 310);

    text('Total', 40, 430);
    text('$34.35',120, 430);

}

function mousePressed(){

    products.pop()
    
    display.push("Blanket")
    display.push("$10.00")
    display.push("Candy")
    display.push("$1.00")
    display.push("Jacket")
    display.push("$12.00")
    display.push("Shirt")
    display.push("$5.00")
    display.push("Plushie")
    display.push("$9.00")
    display.push("Lip Balm")
    display.push("$3.00")
    display.push("Seasonal")
    display.push("$10.00")
    display.push("Trail Mix")
    display.push("$8.00")


    //display.push(products[4])
    //display.push(products[2])

    //for (i=0; i< products.length; i++){
    //    display.push(products[i]);
    //}
    
}

//console.log(display);
