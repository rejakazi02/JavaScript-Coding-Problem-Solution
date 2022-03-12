function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return AmountValue;


}

function updateTotalFiled(totalFiledId, amount) {
    const totalElement = document.getElementById(totalFiledId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = newDepositTotal;
}

function getCurrentBlance() {

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
  return previousBlanceTotal;
    
}



function updateBlance(amount, isAdd) {

    const blanceTotal = document.getElementById('blance-total');
    // const blanceTotalText = blanceTotal.innerText;
    // const previousBlanceTotal = parseFloat(blanceTotalText);

const previousBlanceTotal = getCurrentBlance();
   

    if (isAdd == true) {
        blanceTotal.innerText = previousBlanceTotal + amount;

    } else {

        blanceTotal.innerText = previousBlanceTotal - amount;
    }
}



document.getElementById("deposit-button").addEventListener("click", function () {

    const newDepositAmount = getInputValue("deposit-input");
if (newDepositAmount > 0) {
     updateTotalFiled("deposit-total", newDepositAmount);
    updateBlance(newDepositAmount, true);
}
   




});



document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdrawAmount = getInputValue('withdraw-input');


    const currentBlance = getCurrentBlance();

if (newWithdrawAmount > 0 && newWithdrawAmount < currentBlance) {
     updateTotalFiled('withdraw-total', newWithdrawAmount);

    updateBlance(newWithdrawAmount, false);
}
   if (newWithdrawAmount > currentBlance) {
       console.log('You can not Withdraw')
       
   }


});