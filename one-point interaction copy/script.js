
var money;

function preload() {
    money = loadJSON("spending.json");
}

function setup(){
    createCanvas(10,10);
    //var spending = money.purchases[0].month

    var spending = money.purchases;

    for (var i = 0; i < spending.length; i++) {
        createElement('h1', spending[i].store);
        var month = spending[i].month; 
        for( var j = 0; j< month.length; j++){
           createDiv(month[j]);
        }
    }

 


}

function draw(){
    background(255); 
    fill(0);
}