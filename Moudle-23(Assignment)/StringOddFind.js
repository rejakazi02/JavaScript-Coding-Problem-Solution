//1st Solution

// function OddValue(ValueOfArray) {
//     // let l = 0;
//     for (let i = 0; i < ValueOfArray.length; i++) {
//         let element = ValueOfArray[i];
//         if (element.length % 2 == 1) {
//             // l = element;
//             return element;
//         }
//     }
// }

// let myArray = ["Reja", "Alvy", "Tanbir", "Ali", "Morshed","AAA"];
// let value = OddValue(myArray);
// console.log(value);

//2nd Solution

function OddFriend(value) {
  let  newArray = [];
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        if (element.length % 2 == 0) {
            newArray.push(element);
break;
            
        }
        
    }
    return newArray;
}

let myArray = ["Reja", "Alvy", "Tanbir", "Ali", "Morshed","AAA"];
 let values = OddFriend(myArray);
 console.log(values);