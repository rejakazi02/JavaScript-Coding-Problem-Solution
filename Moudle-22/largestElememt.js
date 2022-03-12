

//  largest Number finding in array


// function largestElement(number) {

//     let largest = number[0];
//     for (let  i = 0;  i < number.length;  i++) {
//         let element = number[ i];
//         if (element > largest) {
//             largest = element;
//         }
        
//     }
// return largest;
// }

// var myArray = [-10, -20, 30, 40, 50];
// var largestNumber = largestElement(myArray);
// console.log('My largest Number is:', largestNumber);

var myArray = [10, 5, 6, 2, 3];
var m = Math.max.apply(null, myArray);
console.log(m)