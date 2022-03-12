// function for add
function addMoney(add1, add2, add3) {
  const totalMoney = add1 + add2 + add3;
  return totalMoney;
}
// function for substract
function subMoney(balance, sub) {
  const remaining = balance - sub;
  return remaining;
}
// get value . convert string to value
function getInputValue(type) {
  const inputText = document.getElementById(type + "-amount");
  const inputValue = parseFloat(inputText.value);
  return inputValue;
}
// inner text with error handle
function innerText(amount) {
  const setInner = document.getElementById(amount + "-update");
  if (amount == "balance") {
    const basicISNumber = calculateBasic();
    if (isNaN(basicISNumber)) {
      const commentBasic = document.getElementById("negative-error-update");
      commentBasic.innerText = basicISNumber;
      setInner.innerText = "0";
    } else {
      setInner.innerText = basicISNumber;
    }
  } else if (amount == "expense") {
    const expense = totalExpense();
    const income = getInputValue("income");
    //expense error
    if (expense > income) {
      const expenseError = document.getElementById("cost-error-update");
      expenseError.innerText = "Expense can not be more than income";
      const balanceError = document.getElementById("balance-update");
      balanceError.innerText = "00";
      setInner.innerText = "00";
    } else {
      setInner.innerText = totalExpense();
    }
  } else if (amount == "save") {
    const saveDecide = getSavePercentage();
    if (isNaN(saveDecide)) {
      const saveError = document.getElementById("save-error");
      saveError.innerText = saveDecide;
    } else {
      setInner.innerText = getSavePercentage();
    }
  } else if (amount == "remaining") {
    const balanceCheck = calculateBasic();
    const saveCheck = getSavePercentage();
    if (balanceCheck < saveCheck) {
      const saveRemainingError = "Saving cannot have more than balance";
      const commentSave = document.getElementById("remaining-error");
      commentSave.innerText = saveRemainingError;
    } else {
      setInner.innerText = remainingBalane();
    }
  }
}
// balance and check input errors
function calculateBasic() {
  const income = getInputValue("income");
  const foodCost = getInputValue("food");
  const rentCost = getInputValue("rent");
  const coltheCost = getInputValue("clothe");

  const add = addMoney(foodCost, rentCost, coltheCost);
  const sub = subMoney(income, add);
  if (income < 0) {
    const commentIncome = "Please enter positive number in income";
    return commentIncome;
  } else if (foodCost < 0) {
    const commentFood = "Please enter positive number in food cost";
    return commentFood;
  } else if (rentCost < 0) {
    const commentRent = "Please enter positive number in rent";
    return commentRent;
  } else if (coltheCost < 0) {
    const commentRent = "Please enter positive number in clothe cost";
    return commentRent;
  } else {
    return sub;
  }
}
// expense
function totalExpense() {
  const foodCost = getInputValue("food");
  const rentCost = getInputValue("rent");
  const coltheCost = getInputValue("clothe");
  const add = addMoney(foodCost, rentCost, coltheCost);
  return add;
}
// save percentage and calculate amount
function getSavePercentage() {
  const savePercentage = getInputValue("save");
  const income = getInputValue("income");
  const saveAmount = savePercentage / 100;
  const totalSave = income * saveAmount;
  if (savePercentage < 0) {
    const errorSave = "Save percentage cannot be negative";
    return errorSave;
  } else {
    return totalSave;
  }
}
//remaining balance
function remainingBalane() {
  const remainingBalaneValue = getSavePercentage();
  //save amount
  const previousBalance = calculateBasic();
  const remaining = subMoney(previousBalance, remainingBalaneValue);
  return remaining;
}
// calculate button
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    innerText("balance");
    innerText("expense");
  });
//save button
document.getElementById("save-button").addEventListener("click", function () {
  innerText("save");
  innerText("remaining");
});
// note- I took input type as number. You can not take string intentionally string here. So I handled this error case by default
