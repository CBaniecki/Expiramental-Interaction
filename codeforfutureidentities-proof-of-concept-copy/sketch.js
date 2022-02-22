let mic;

function setup(){
 let cnv=createCanvas(800,800);
 cnv.mousePressed(userStartAudio);
 mic = new p5.AudioIn();
 mic.start();
}

function draw() {
    background(0)
    var vol = mic.getLevel();

    stroke(255);
    line(200,100,220, 120);

    //fill(vol*255);
    noFill();
    ellipse(550, 200, 240, 240);
    strokeWeight(vol*255);
    ellipse(100, vol*200, 300,300);
    ellipse(200, 400, 300,300);
    ellipse(650,540, 240,240);
    //console.log(vol);

    //for (let i = 0; i< 6; i++) {
    //      stroke(255);
    //      ellipse( i*60 + 40, vol* 300+ random(50), 50);
    //}

   
}

function mousePressed(){
    userStartAudio
}