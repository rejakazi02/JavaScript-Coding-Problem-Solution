document
    .getElementById("deposit-button")
    .addEventListener("click", function () {

         // input filed er kaj korchi
         
        const depositInput = document.getElementById("deposit-input");
        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);


        // update drposit total 

        const depositeTotal = document.getElementById("deposit-total");
        const previousDepositAmountText = depositeTotal.innerText;
        const previousDepositAmount = parseFloat(previousDepositAmountText);
        const newDepositTotal = previousDepositAmount + newDepositAmount;

        depositeTotal.innerText = newDepositTotal;



        //  Update account blance

        const blanceTotal = document.getElementById('blance-total');
        const blanceTotalText = blanceTotal.innerText;
        const previousBlanceTotal = parseFloat(blanceTotalText);
        const newBlanceTotal = previousBlanceTotal + newDepositAmount;
        blanceTotal.innerText = newBlanceTotal;

  //input filed er jayga paka korchi

        depositInput.value = "";
    });



    document.getElementById('withdraw-button').addEventListener('click', function () {

        // input filed er kaj korchi

        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdrawAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    
        // value add kora and view korar kaj korchi

        const WithdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawAmountText = WithdrawTotal.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
        WithdrawTotal.innerText = newWithdrawTotal;

        // Total blance theke biog korchi 

        const blanceTotal = document.getElementById('blance-total');
        const blanceTotalText = blanceTotal.innerText;
        const previousBlanceTotal = parseFloat(blanceTotalText);
        const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
        blanceTotal.innerText = newBlanceTotal;

        //input filed er jayga paka korchi

        withdrawInput.value = '';
      
    
        
    });


