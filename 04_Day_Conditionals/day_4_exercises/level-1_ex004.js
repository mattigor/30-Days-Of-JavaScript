// 4. Even numbers are divisible by 2 and the remainer is zero. How do you check, if a number is even or not using JavaScript?

const a = Number(prompt("Enter a number: "));
const b = Number(prompt("Enter a number: "));

if (a % 2 == 0) {
    console.log(`${a} is an even number`);
} else {
    console.log(`${a} is an odd number`);
}

if (b % 2 == 0) {
    console.log(`${b} is an even number`);
} else {
    console.log(`${b} is an odd number`);
}