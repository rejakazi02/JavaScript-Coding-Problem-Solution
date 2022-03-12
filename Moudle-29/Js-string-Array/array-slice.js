const number = [3, 5, 8, 6, 88, 66, 33, 98];
const numberSlice = number.slice(1, 7);
console.log(number);
console.log(numberSlice);

// splice to remove an Element from an array

const numberSlices = number.splice(1, 3);
console.log(numberSlices);
console.log(number);

 //splice to remove and add an Element from an array

const numberSlices1 = number.splice(1, 3, 11, 22, 33, 44);
console.log(numberSlices1);
console.log(number);