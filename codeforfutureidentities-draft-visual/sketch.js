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
    //stroke(vol*255);
    //strokeWeight(vol*255);
    noFill();
    //for(var i = 0; i < volhistory.length; i++){
    //    var y = map(volhistory[i], 0,1, height/4, 0);
    //     point(i, y, 100);
    //}

    //for(var i = 0; i < volhistory.length; i++){
    //   var y = map(volhistory[i], 0,1, height, 0);
    //   point(i, y, 100);
    //}
  
    //  for(var i = 0; i < volhistory.length; i++){
    //    var y = map(volhistory[i], 0,1, height, 0);
    //    point(i, y);
    //}

    stroke(255);
    //fill(vol*255);
    noFill();
    line(500, 0, vol*255, 400);
    //curve( vol*255, 100, 500, 300, vol*255, 500, 130, 230, 0);
    line(200, 0, vol*255, 200);
    line( 0, 400, 200, vol*255);
    line(0, 300, 300, vol*255);
    line(100, 900, 900, vol*255);
    line(200, 1000, 1000, vol*255);
    line(400, 1100, 1100, vol*255);
    line(0, 500, 900, vol*255);
    line(500, 900, 300, vol*255);
    line(900, 1000, 1000, vol*255);
    line(1000, 1100, 1100, vol*255);
    //ellipse(1000, 500, 400, 400);
    //ellipse(300, 555, vol*255, vol*255);
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