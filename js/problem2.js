function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Both parameters must be strings.";
  }

  return string1.includes(string2);
}

const string1 = "John Doe";
const string2 = "ohn";
const result = matchFinder(string1, string2);
console.log(result);
