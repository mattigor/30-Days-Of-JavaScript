// 3. Check if typeof '10' is exactly equal to 10. If not, make it exactly equal

let number = "10";

console.log(typeof number);

number = Number(number);

console.log(number == 10? "yes" : "no");
