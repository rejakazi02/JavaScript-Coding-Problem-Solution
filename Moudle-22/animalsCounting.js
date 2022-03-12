


function animalCount(miles) {


    if (miles <= 10) {
        var count = miles * 10;
        return count;

        
    }

    else if (miles >= 11 && miles <= 20) {
        let second10Miles = miles - 10;

        let first10miles = 10 * 10;
        const countSecound10Miles = second10Miles * 50;
let total = first10miles + countSecound10Miles;
return total;
        
    }

    else {
         let first10Miles = 10 * 10;
         let second10Miles = 10 * 50;
         let countThirdMailes = miles - 20;
         let third10Miles = countThirdMailes * 100;
         let TotalMiles = first10Miles + second10Miles + third10Miles;
         return TotalMiles;
       
    }
    
}

let myMiles = 35;
let TotalAnimals = animalCount(myMiles);
console.log('Total animals:', TotalAnimals );