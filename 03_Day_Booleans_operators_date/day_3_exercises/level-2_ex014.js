// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume someone lives just hundred years

let years = Number(prompt("Enter number of years you live: "));

const secondsPerYear = 60 * 60 * 24 * 365;

let seconds = years * secondsPerYear;

console.log(`You lived ${seconds} seconds.`);