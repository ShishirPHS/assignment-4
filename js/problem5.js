function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Array cannot be empty.";
  }

  let total = 0;

  for (let i = 0; i < changeArray.length; i++) {
    total += changeArray[i];
  }

  return total >= totalDue;
}

const result = canPay([1, 3, 5], 10);
console.log(result);
