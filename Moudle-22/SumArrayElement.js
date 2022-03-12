// const numbers = [ 44, 23, 34, 54, 5, 78];

// let element = 0;
// for (let i = 0; i < numbers.length; i++) {

//     element = element + numbers[i];

// }

// console.log(element);

let sum = 0;

function AddElement(number) {
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum;
}

let myArry = [55, 56, 44, 22, 33, 88, 77];

let totalSum = AddElement(myArry);

console.log(sum);
