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
    //strokeWeight(1);
    //noFill();
    //for(var i = 0; i < volhistory.length; i++){
    //    var y = map(volhistory[i], 0,10, 100, 800);
    //     point(i, y, 200);
    //}



    //for(var i = 0; i < volhistory.length; i++){
    //  var y = map(volhistory[i], 0,1, height/2, 0);
    //   point(i, y, 100);
    //}
  
    //  for(var i = 0; i < volhistory.length; i++){
    //  var y = map(volhistory[i], 0,1, 700, 0);
    //    point(i, y);
    //}



    strokeWeight(vol*255);

    stroke(255);
    fill("#00FFFF");

    //line(0, 10, 2000, 10);
    //line(0, 20, 2000, 20);
    //line(0, 30, 2000, 30);

    //line(0, 400, 2000, 400);
    //line(0, 410, 2000, 410);
    //line(0, 420, 2000, 420);

    //line(0, 200, 2000, 200);
    //line(0, 210, 2000, 210);
    //line(0, 220, 2000, 220);

    //line(0, 740, 2000, 740);
    //line(0, 750, 2000, 750);
    //line(0, 760, 2000, 760);

    //curve( vol*255, 100, 500, 300, vol*255, 500, 130, 230, 0);
    //line(200, 0, vol*255, 200);
    //line( 0, 400, 200, vol*255);
    //line(0, 300, 300, vol*255);
    //line(100, 900, 900, vol*255);
    //line(200, 1000, 1000, vol*255);
    //line(400, 1100, 1100, vol*255);
    //line(0, 500, 900, vol*255);
    //line(500, 900, 300, vol*255);
    //line(900, 1000, 1000, vol*255);
    //line(1000, 1100, 1100, vol*255);
    //ellipse(1000, 500, 400, 400);
    ellipse(300, 400, vol*200, vol*200);
    ellipse(300, 400, 150, 150);

    fill("#E6E6FA")
    ellipse( 500, 300, vol*255, vol*255);
    ellipse( 500, 300, 100, 100);
    //strokeWeight(vol*255);
    //ellipse(100, vol*200, 300,300);
    //console.log(vol);

    
   
}

