

function largestElememt(numbers){

    let max = numbers[10, 20, 30];
    for(let i=0; i<=numbers.length; i++){
       const element = numbers[i];
       if (element > max) {
           max = element;
           console.log(max);
       }
    }
}




function smllestElememt(numbers){

    let min = numbers[10,20, 30];
    for(let i=0; i<=numbers.length; i++){
       const element = numbers[i];
       if (element < min) {
           min = element;
           
       }
    }
}