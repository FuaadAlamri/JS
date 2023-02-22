// convert num to string to array

const number = 11;
const digits = String(number)
    .split('')
    .map(Number);

if (digits[0]=== digits[digits.length-1]){
    //return true;
    console.log("true");

}
else {
    console.log("false");

    //return false;
}

console.log(digits);
//[1, 2, 3, 4, 5]