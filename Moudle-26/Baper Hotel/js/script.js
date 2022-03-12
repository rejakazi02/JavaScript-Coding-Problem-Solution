 document.getElementById('SubmitBtn').addEventListener('click', function () {

    const userEmail = document.getElementById('user-email');
    const EmailValue = userEmail.value;
    const userPass = document.getElementById('user-pass');
    const PassValue = userPass.value;

    if (EmailValue == 'reja@gmail.com' && PassValue == 'aaa') {

        console.log('input is valid');

        window.location.href = 'banking.html';
        
    }

    else{
        console.log('input is not valid');
    }
     
 });



 document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput= document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositeTotal = document.getElementById('deposit-total');
    depositeTotal.innerText = depositAmount;

     depositInput.value = '';
     
 })


