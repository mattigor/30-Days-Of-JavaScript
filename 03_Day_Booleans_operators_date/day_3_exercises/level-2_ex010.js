// 10. If the length of your name is greater than 7, say your name is long, else, say your name is short.

const yourName = String(prompt("Enter your name: "));

console.log(yourName.length > 7 ? "Your name is long" : "Your name is short");