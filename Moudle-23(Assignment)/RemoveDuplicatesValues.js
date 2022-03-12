// function RemoveDuplicates(DuplicateData) {

//     return DuplicateData.filter((NewElements, Arrayindex) => DuplicateData.indexOf(NewElements) === Arrayindex);

// }


// var myArray = ['Reja', 'kazi', 'raja', 'kazi', 'mama'];
// var NewArray = RemoveDuplicates(myArray);
// console.log('New array is:', NewArray);



function removeduplicate(value) {

    let newArray = [];

    for (let i = 0; i < value.length; i++) {
        let element = value[i];
        if (newArray.indexOf(element) === -1) {

            newArray.push(element);
            
        }
        
    }
    return newArray;
    
}

let myArray = ['Reja', 'kazi', 'Reja', 'kazi', 'mama'];
 let newElements = removeduplicate(myArray);
console.log('New array is:', newElements);
 


