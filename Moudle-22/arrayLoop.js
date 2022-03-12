var number = [45, 55, 555, 87];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log('Array:', element);
}



var bookItems = ['ICT', 'Bangla', 'Science', 'History', 'English'];

// for (let i = 0; i < bookItems.length; i++) {
//     const element = bookItems[i];
//     console.log('Book Name is :', element);
// }


bookItems[3] = 'Nobel';
bookItems.push('Story Brand');
bookItems.pop();
 console.log(bookItems);

 for (let i = 0; i < bookItems.length; i++) {
     const element = bookItems[i];
     
     if (bookItems[1] == 'Bangla' ){
        console.log('I am Bangla');
        break;
    }
    else {
        console.log('i am Not Bangla');
    }

    console.log(element);
 }
 


