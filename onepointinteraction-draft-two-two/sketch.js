var slider;

function setup(){
    createCanvas(650,600);

    slider = createSlider(0, 100, 0);
}

function draw(){
    background(0);
    
    fill(0,0, 255);
    noStroke();
    rect(0,0,200,600);
    
    
    textSize(20);
    fill(255);
    text('savings', 100,slider.value());
    text('spending', 400, slider.value())

    text('80%', 400, 200);
    text('20%', 100, 200);


    
}
