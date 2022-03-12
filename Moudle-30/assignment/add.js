function getExpence(price) {

    const productPrice = document.getElementById(price + '-amount');
    const productValue = parseFloat(productPrice.value);
   // productPrice.value = '';
    return productValue;

    // const inputText = document.getElementById(type + "-amount");
    // const inputValue = parseFloat(inputText.value);
    // return inputValue;
    
} 

// function for add
function addMoney(add1, add2, add3) {
    const totalMoney = add1 + add2 + add3;
    return totalMoney;
}

function subMoney(balance, sub) {
    const remaining = balance - sub;
    return remaining;
  }

 function totalExpence() {


    const income = getExpence('income');
    const foodCost = getExpence('food');
    const rentCost = getExpence('rent');
    const coltheCost = getExpence('clothe');
    const add = addMoney(foodCost, rentCost, coltheCost);
return add;
     
 }

 function calculateBasic() {
    const income = getExpence('income');
    const foodCost = getExpence('food');
    const rentCost = getExpence('rent');
    const coltheCost = getExpence('clothe');
    const add = addMoney(foodCost, rentCost, coltheCost);
    const sub = subMoney(income, add);
return sub;

 }

 function innerText(amount) {
    const setInner = document.getElementById(amount + "-update");
    const p = totalExpence();
  
    

    setInner.innerText = p;
    

  
 }
 
 function innerTextP(amount) {
    const setInner = document.getElementById(amount + "-update");
    const p = calculateBasic();
  
    

    setInner.innerText = p;
    

  
 }
 

 
 
 document.getElementById('calculate-button').addEventListener('click', function () {
//    const p = document.getElementById('expense-update');
//    const income = getExpence('income');
//     const foodCost = getExpence('food');
//     const rentCost = getExpence('rent');
//     const coltheCost = getExpence('clothe');
//     const pp = foodCost + rentCost + coltheCost;
//     console.log(pp);
//     p.innerText = pp;

//     const op = document.getElementById('balance-update');
//     const pop = income - pp;
//     op.innerText = pop;
//     console.log(pop);

 const CurrentBlacne = innerTextP("balance");
     const currentExpance  = innerText("expense");
     
     
 })


 document.getElementById('save-button').addEventListener('click', function () {
const remaing = document.getElementById('save-update');
    const save = getExpence('save');
    const income = calculateBasic('balance');
    const saveAmount = save / 100;
    const totalSave = income * saveAmount;
    remaing.innerText = totalSave;

    const remmaing = document.getElementById('remaining-update');
     const t = calculateBasic('balance');
     const f = parseFloat(t.value);
     const rt = t - totalSave;
     remmaing.innerText = rt;



 })