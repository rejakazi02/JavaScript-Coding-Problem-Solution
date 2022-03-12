function addNumbers() {

    let result = 0;
    for (const num of arguments) {
    result = result + num;

    }
    return result;
}

const myNumber = addNumbers(30, 3, 4);
console.log(myNumber);

























