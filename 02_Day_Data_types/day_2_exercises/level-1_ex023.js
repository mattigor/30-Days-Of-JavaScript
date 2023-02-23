// 23. Use match() method to find all the a's in 30 Days Of JavaScript

const challenge = "30 Days Of JavaScript";
const found = challenge.match(/a/g).length;

console.log(found);
console.log(`Number of a's found: ${found}`);
