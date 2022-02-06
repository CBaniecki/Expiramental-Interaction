
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

var index = 0; 

//var display = []

var time1 = 2000;
var time2 = 1000;


//console.log(display);

//products.pop();

//console.log(products);

function setup(){
    createCanvas(650,600);
}

function draw(){
    var currentTime = millis();


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

    fill(255)
    rect(20, 40, 190,450);

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




    if(currentTime > time1){
        text('Total', 40, 430)
        text('$34.35',120, 430)


    }
    if(currentTime >  time2){
    text('Blanket', 40, 100)
    text('$10.00', 140, 100)
    text('Candy', 40, 130)
    text('$1.00', 140, 130)
    text('Jacket',40, 160)
    text('$12.00', 140, 160)
    text('Shirt', 40, 190)
    text('$5.00', 140, 190)
    text('Plushie', 40, 220)
    text('$9.00', 140, 220)
    text('Lip Balm', 40, 250)
    text('$3.00', 140, 250)
    text('Seasonal', 40, 280)
    text('$10.00', 140, 280)
    text('Trail Mix', 40, 310)
    text('$8.00', 140, 310)
        

    //  text(products[0], 200, 100);
    //    text(products[1], 200, 200);


    }
}

function mousePressed(){
    products.pop()
}

