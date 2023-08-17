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

const arrayOfNumbers = [4, 20];
console.log(sortMaker(arrayOfNumbers));
