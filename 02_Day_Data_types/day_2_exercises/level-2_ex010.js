// 10. Access the 'JavaScript' string characters using a random number

const js = "JavaScript";
let randNum = Math.random() * js.length;

console.log(`Random letter: ${js.charAt(randNum)}.`);
