document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.innerText;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const WithdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = WithdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    WithdrawTotal.innerText = newWithdrawTotal;

    
});