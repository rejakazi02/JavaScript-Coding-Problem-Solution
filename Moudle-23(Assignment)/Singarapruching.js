// Singara Buy

function singara(price) {
    var singaraPrice = 10;
    var SingaraQuantity = price * singaraPrice;
    return SingaraQuantity;
    
}


var Bugget = 25;

var TotalSingara = singara(Bugget);
console.log('Total Quantity of Singara: ', TotalSingara , 'Pices');

