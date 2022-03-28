//var mic;
var amp;

var volhistory = []

function preload(){
    song = loadSound('song/amazing-grace_clarissa-piano.mp3');
}

function toggleSong(){
    if(song.isPlaying()){
        song.pause();
    }else{
        song.play();
    }
}

function setup(){
 cnv = createCanvas(800,800);
 
 // Is there a way to have the mic audio create a visualization, similar to when a song is connected? (I tried following the tutorial and adding the mic input code, which was not succesful)
 //cnv.mousePressed(userStartAudio);
 //mic = new p5.AudioIn();
 //mic.start();

 button = createButton('toggle');
 button.mousePressed(toggleSong);
 song.play();
 amp = new p5.Amplitude();
}

function draw() {
    background(0)
    var vol = amp.getLevel();
    volhistory.push(vol);
    stroke(255);
    noFill();
    for(var i = 0; i < volhistory.length; i++){
        var y = map(volhistory[i], 0,1, height/2, 0);
         point(i, y,);
    }

    // I was trying to replicate the bouncing ball tutorial where if the length is greater than the width it moves the other direction/moves to a different location on the canvas
   // if (volhistory.length > width) {
     //  var y= map(volhistory[i], 0, 1, height, 0);
    //}

   // stroke(255);
    //fill(vol*255);
    //noFill();
   // ellipse(500, 200, 200, 200);
    //strokeWeight(vol*255);
    //ellipse(100, vol*200, 300,300);
    //console.log(vol);

    //for (let i = 0; i< 6; i++) {
    //      stroke(255);
    //      ellipse( i*60 + 40, vol* 300+ random(50), 50);
    //}

   
}

//function mousePressed(){
    //userStartAudio
//}