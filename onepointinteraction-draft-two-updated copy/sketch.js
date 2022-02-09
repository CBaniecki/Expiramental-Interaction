
//var products = [
 //   "Shirt",
 //   "Jacket",
 //   "Candy",
 //   "Blanket",
 //   "Lip Balm",
 //   "Plushie",
 //   "Seasonal Gifts",
 //   "Trail Mix"
//];

var index = 0; 

//var display = []

var time1 = 2000;
//var time2 = 1000;


var items = [];

var display = [];

function preload(){
    items[0] = loadImage('images/teddybear.jpeg');
    items[1] = loadImage('images/blanket.jpeg');
    items[2] = loadImage('images/jacket.jpeg');
    items[3] = loadImage('images/caramel-popcorn.jpeg');
    items[4] = loadImage('images/licorice.jpeg');
    items[5] = loadImage('images/reciept.jpg');
    items[6] = loadImage('images/lip-balm.jpeg');
}



function setup(){
    createCanvas(950,800);

}



function draw(){
   
    var currentTime = millis();


    //if(mouseIsPressed=== true){
    //  value = 0;
    //}


    background(250, 0, 0);


    //fill(255);
    //noStroke();
    //rect( 230, 120, 100, 75);
    //rect( 230, 220, 100, 75);
    //rect( 370, 120, 100, 75);
    //rect( 370, 220, 100, 75);
    //rect( 510, 120, 100, 75);
    //rect( 510, 220, 100, 75);
    //rect( 230, 320, 180, 75);
    //rect( 455, 320, 160, 75);


    image(items[0], 500,310,150,130);
    image(items[1], 600, 230,150,140);
    image(items[2], 650, 353,200,280);
    image(items[3], 410, 440, 240,200);
    image(items[4], 340, 150, 260, 160);
    image(items[5], 40, 30, 220, 700);
    image(items[6], 600, 100, 250, 150);


    //fill(255);
    //rect(40, 100, 210,500);



    fill(0);
    noStroke()
    textSize(20);

    text('Impulsive Target Buys', 54, 160);


    textSize(15);

    text('click to add products to reciept', 50, 220);
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


    //text('Total', 40, 430)

   if(currentTime > time1){
        text('$34.35',200, 432);
   }
    //if(currentTime >  time2){
    //text('Blanket', 40, 100)
    //text('$10.00', 140, 100)
    //text('Candy', 40, 130)
    //text('$1.00', 140, 130)
    //text('Jacket',40, 160)
    //text('$12.00', 140, 160)
    //text('Shirt', 40, 190)
    //text('$5.00', 140, 190)
    //text('Plushie', 40, 220)
    //text('$9.00', 140, 220)
    //text('Lip Balm', 40, 250)
    //text('$3.00', 140, 250)
    //text('Seasonal', 40, 280)
    //text('$10.00', 140, 280)
    //text('Trail Mix', 40, 310)
    //text('$8.00', 140, 310)
        

    //  text(products[0], 200, 100);
    //    text(products[1], 200, 200);
    //}
}


function mousePressed(){
    display.push('Blanket')
    display.push("$$")
    display.push("Candy")
    display.push("$")
    display.push("Jacket")
    display.push("$$")
    display.push("Plushie")
    display.push("$")
    display.push("Lip Balm")
    display.push("$")
    display.push("Caramel Popcorn")
    display.push("$")
}




//function keyPressed(){
// if(value === 255) {
//    value = 0;
// }

//}

