function getPin() {
    console.log("Go to The Get pin Function And 4 digit pichi");
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log("Go to The Get pin Function And 3 digit pichi");
        return getPin();
    }
}

function generatPin() {
    const pin = getPin();
    document.getElementById('get-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;

    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';

        }
    } else {
        const Previousnumber = calcInput.value;
        const newNumber = Previousnumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin() {

    const pin = document.getElementById('get-input').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessege = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
     
       successMessege.style.display = 'block';
       failError.style.display = 'none';
    }

    else{
        successMessege.style.display = 'none';
        failError.style.display = 'block';
    }
    
}