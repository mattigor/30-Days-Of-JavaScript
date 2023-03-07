/*
    13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive, if not, tell the user to wait a certain amount of years
*/

const birth = String(prompt("Enter birth year: "));
const year = 2023;
let age = year - birth;
let allowedToDrive = 18 - age;

age >= 18

? console.log(`Your are ${age}. You are old enough to drive`)
: console.log(`You are ${age}. You will be allowed to drive after ${allowedToDrive} years`)