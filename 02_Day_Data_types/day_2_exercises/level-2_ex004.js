// 4. Check if parseFloat('9.8') is equal to 10, if not, make it exactly equal with 10

let number = "9.8";

console.log(number == 10? "true" : "false");

number = Math.ceil(parseFloat("9.8"));

console.log(number == 10? "true" : "false");
console.log(number);
