var index = 0; 

var items = [];

var display = [];

function preload(){
    items[0] = loadImage('images/teddy-bear.png');
    items[1] = loadImage('images/blanket.png');
    items[2] = loadImage('images/jacket.png');
    items[3] = loadImage('images/caramel-popcorn.png');
    items[4] = loadImage('images/licorice.png');
    items[5] = loadImage('images/reciept.jpg');
    items[6] = loadImage('images/lip-balm.png');
    items[7] = loadImage('images/water-cup.png');
    items[8] = loadImage('images/wine-bottles.png');
    items[9] = loadImage('images/waffle-iron.png');
    items[10] = loadImage('images/water-bottle.png');
    items[11] = loadImage('images/tote-bag.png');
    items[12] = loadImage('images/towels.png');
    items[13] = loadImage('images/storage-jars.png');
    items[14] = loadImage('images/journals.png');
    items[15] = loadImage('images/pillows.png');
    items[16] = loadImage('images/espresso-machine.png');
    items[17] = loadImage('images/chunky-blankets.png');
    items[18] = loadImage('images/chocolate-bar.png'); 
    items[19] = loadImage('images/chewing-gum.png');
    items[20] = loadImage('images/couch.png');
    items[21] = loadImage('images/coffee-table.png');
    items[22] = loadImage('images/side-table.png');
    items[23] = loadImage('images/pink-candle.png');
    items[24] = loadImage('images/tulips.png');


}

function setup(){
    createCanvas(1700,1000);

}

function draw(){
   
    background(250, 0, 0);


    image(items[20], 400, 0, 900, 700);
    image(items[11], 1010, 480, 120, 220);
    image(items[21], 580, 530, 600, 300);
    image(items[22], 400, 400, 200, 250);
    image(items[22], 1100, 400, 200, 250);
    image(items[0], 640,280,150,130);
    image(items[1], 630, 400,150,140);
    image(items[5], 40, 30, 220, 700);
    image(items[8], 675, 490, 200, 150);
    image(items[10], 325, 260, 250, 200);
    image(items[6], 392, 315, 250, 150);
    image(items[12], 780, 360, 150, 150);
    image(items[15], 900, 250, 200, 300);
    image(items[7], 940,490, 250, 150);
    image(items[16], 1110, 280, 180, 180);
    image(items[17], 600, 370, 200, 100);
    image(items[23], 800, 500, 95, 150);
    image(items[24], 820, 355, 200, 300 );



    stroke(255);
    strokeWeight(2);
    noFill();
    arc( 700, 90, 250,100, 180, 0);
    line(800,80,825,90);
    line(845,80,825, 90);


    fill(0);
    noStroke()
    textSize(20);

    text('Impulsive Target Buys', 54, 170);


    textSize(15);

    text('click to reflect items on receipt', 50, 220);
    text(display[0], 60, 250);
    text(display[1], 200, 250);
    text(display[2], 60, 275);
    text(display[3], 200, 275);
    text(display[4], 60, 300);
    text(display[5], 200, 300);
    text(display[6], 60, 325);
    text(display[7], 200, 325);
    text(display[8], 60, 350);
    text(display[9], 200,350);
    text(display[10], 60, 375);
    text(display[11], 200, 375);
    text(display[12], 60, 400);
    text(display[13], 200, 400);

    text('$34.35',200, 432);



    fill(255);
    textSize(20)
    text('click on', 580, 40);
    text('products', 580, 60);
}

function mousePressed(){
    display.push('Blanket')
    display.push("$$")
    display.push("Candle")
    display.push("$")
    display.push("Pillows")
    display.push("$$")
    display.push("Plushie")
    display.push("$")
    display.push("Lip Balm")
    display.push("$")
    display.push("Flowers")
    display.push("$")
}