function FibonacciSeries(nunber) {
  //let sum = [0, 1];
  if (typeof nunber != "number") {
    return "please give a number";
  } else if (nunber < 2) {
    return " Pls imput a possitive number which is gater than 2.";
  }
  for (let i = 2; i < nunber; i++) {
    sum[i] = sum[i - 1] + sum[i - 2];
  }
  return sum;
}
let sum = [0, 1];
let myArray = 3;
let TotalSum = FibonacciSeries(myArray);

console.log("The Series is:", TotalSum);
