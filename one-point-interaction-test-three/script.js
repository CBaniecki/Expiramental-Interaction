
const purchases = [

{
    "month": "december",
    "store": [ "amazon", "twenty dollars"
    ]
},

{
    "month": "december",
    "store": [ "milestone books", "twenty five dollars"
    ]
},

{
   "month": "december",
   "store": ["l'occitaine", "twenty dollars"
   ]
},
]


function setup(){
noCanvas()    
for(var i = 0; i < purchases.length; i++){
        createElement('h1', purchases[i].month);
        var store = purchases[i].store;
        for(var j = 0; j< store.length; j++ ){
            createDiv(store[j]);
    }

}
}

function draw(){
    if (mouseIsPressed){
        purchases.splice(0); 
    }
}       
    


