var october = [
    
    "fourteen dollars at overstock", 
    "thirty-six dollars at overstock"
];

function octoberPurchases(){
    const octoberSpending = october[Math.floor(Math.random() * october.length)];
    document.getElementById("displayOctober").innerHTML = octoberSpending;
}

var november = [
     "eighteen dollars at amazon",
     "thirty dollars at ebay",
     "twenty-eight dollars at fanprint shirts"
];

function novemberPurchases(){
    const novemberSpending = november[Math.floor(Math.random()* november.length)];
    document.getElementById("displayNovember").innerHTML = novemberSpending;
}

var december = [
    "twenty dollars at amazon",
    "twenty five dollars at milestone books",
    "twenty dollars at l'Occitaine"
]

function decemberPurchases(){
    const decemberSpending = december[Math.floor(Math.random()* december.length)];
    document.getElementById("displayDecember").innerHTML = decemberSpending;
}