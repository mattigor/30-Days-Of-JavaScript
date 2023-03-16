// 1. Get user input using prompt("Enter your age: "). If user is 18 or older, give feedback: "You are old enough to drive" but if not 18, give another feedback stating to wait for the number of years he needs to turn 18

const age = prompt("Enter your age: ");
const yearsToDrive = 18 - age;

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You are left with ${yearsToDrive} years to drive.`);
}