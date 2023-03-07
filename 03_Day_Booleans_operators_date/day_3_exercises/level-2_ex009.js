// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate the pay of the person

const hours = Number(prompt("Enter hours: "));
const rate = Number(prompt("Enter rate per hour: "));
let earning = hours * rate;

console.log(`Your weekly earning is ${earning}`);