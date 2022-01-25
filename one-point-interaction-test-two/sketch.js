var money;

function preload(){
    money = loadJSON("spending.json");
}

function setup(){
    
    var spending = money.purchases;

    for(var i = 0; i < spending.length; i++){
        createElement('h1', spending[i].month);
        var store = spending[i].store;
        for(var j = 0; j< store.length; j++ ){
            createDiv(store[j]);
        }
    }
}
function draw(){
}