var slider;

function setup(){
    createCanvas(650,600);

    slider = createSlider(0, 100, 0);
}

function draw(){
    background(0);
    
    //fill(255);
    text('savings', 100,slider.value());

    rect(0,130,200,200)
    fill("#ADD8E6");
}
