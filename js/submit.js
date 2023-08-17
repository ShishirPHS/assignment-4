function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a number";
  }

  return number * number * number;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Both parameters must be strings.";
  }

  return string1.includes(string2);
}

function sortMaker(arr) {
  let arrItemOne = arr[0];
  let arrItemTwo = arr[1];

  if (typeof arrItemOne !== "number" || typeof arrItemTwo !== "number") {
    return "Please provide an array of numbers.";
  }

  if (!(arrItemOne >= 0) || !(arrItemTwo >= 0)) {
    return "Invalid Input";
  }

  if (arrItemOne === arrItemTwo) {
    return "equal";
  }

  if (arrItemOne < arrItemTwo) {
    const temp = arrItemOne;
    arrItemOne = arrItemTwo;
    arrItemTwo = temp;

    const newArray = [arrItemOne, arrItemTwo];

    return newArray;
  }

  return arr;
}

function findAddress(obj) {
  if (typeof obj !== "object") {
    return "Please provide me a valid object";
  }

  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";

  return street + "," + house + "," + society;
}

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
