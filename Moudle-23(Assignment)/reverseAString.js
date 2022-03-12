
// 1st away of reverse string 


// function recerseString(value) {    

//     return value.split("").reverse().join("");


//     }


//     var input = 'Enter a string: ';
//     console.log(input);
// var i = recerseString(input);
// console.log(i);


// // 2nd away of reverse string

// function reverseString1(value) {
// let newArray = '';
//     for (let i = value.length - 1; i >= 0; i--){
//    newArray = newArray + value[i];
       
//     }
//     return newArray;
// }

// var input1 = 'Enter a string1: ';
// console.log(input1);
// var i1 = reverseString1(input1);
// console.log(i1);


// 3ed away of reverse string 

function revarseString(value) {
    let reverse = '';
    for (const letter of value)
    {
console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

let myArray = 'habul babul labul';
let reverseStrings = revarseString(myArray);
console.log(reverseStrings);