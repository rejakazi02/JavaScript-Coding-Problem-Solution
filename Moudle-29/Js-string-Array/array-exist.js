function megaFriends(friends) {

    if (Array.isArray(friends) == false) {
        return 'Please provide an array of string... ar tana hole bari giye ghuma ';
        
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
            
        }
        
    }
    return mega;
    
}

const friends = '123';
const friend = ['reja', 'alvy', 'habu', 'jiya', 'khali', 'khalid', 'jim'];
const myBigbuddy = megaFriends(friend);
// console.log(myBigbuddy);

// Using indexOf

if (friend.indexOf('khali') != -1) {
    console.log('jim Exists');
}


// using includes

 if (friend.includes('reja')) {
    console.log('Ahoo vatija') ;
 }

// using Concat

const first = [1, 2, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);