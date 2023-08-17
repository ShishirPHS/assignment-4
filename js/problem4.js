function findAddress(obj) {
  if (typeof obj !== "object") {
    return "Please provide me a valid object";
  }

  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";

  return street + "," + house + "," + society;
}

const obj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};

console.log(findAddress(obj));
