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
 cnv = createCanvas(1400,800);
 
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
    strokeWeight(2);
    noFill();
    for(var i = 0; i < volhistory.length; i++){
        var y = map(volhistory[i], 0,1, height/4, 0);
         point(i, y, 100);
    }

    for(var i = 0; i < volhistory.length; i++){
       var y = map(volhistory[i], 0,1, height/2, 0);
       point(i, y, 100);
    }
  
    //  for(var i = 0; i < volhistory.length; i++){
    //    var y = map(volhistory[i], 0,1, height, 0);
    //    point(i, y);
    //}

    stroke(255);
    //fill(vol*255);
    noFill();
    ellipse(500, 200, 400, 400);
    ellipse(1000, 500, 400, 400);
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