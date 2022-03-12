const numbers = [3, 5, 6, 8, 9, 1, 4, 2, 7];
// const sortedNumber = numbers.sort();
// console.log(sortedNumber);

// Sorting Strinng 

const string = ['reja', 'alvy', 'rizvi', 'habu', 'ziya', 'babu', 'dudu'];
// const sortedString = string.sort();
// console.log(sortedString);

// reverse string

const sortedString = string.reverse();
// console.log(sortedString);


// Double Number sorted

const bigNumbers = [66, 55, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
    
})

console.log(sortedNumbers);