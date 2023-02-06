//In this function, we first check if the input is of type string. If it's not, we return 0.
// Then, I used the indexOf method to find the position of the decimal point in the string.
//If the decimal point is not found, its return 0. Finally,
//I subtractd the position of the decimal point from the length of the string and subtract 1 to get the number of digits after the decimal point.
function Decimal_places(num) {

  if (typeof num !== "string") {  // check the type of input
    return 0;
  }
  const decimalIndex = num.indexOf(".");// determine the index of the decimal point
  if (decimalIndex === -1) { // check if there is a decimal point
    return 0;// if there is no decimal point
  }
  return num.length - decimalIndex - 1; // -1 to remove the decimal point from count digits
