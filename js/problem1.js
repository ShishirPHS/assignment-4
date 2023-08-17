function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a number";
  }

  return number * number * number;
}

console.log(cubeNumber(4));
