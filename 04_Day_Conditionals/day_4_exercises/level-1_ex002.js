// 2. Compare the values of myAge and yourAge using if...else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt("Enter your age: ") to get the age as input

let myAge = 24;
let yourAge = Number(prompt("Enter your age: "));
let difference1 = myAge - yourAge;
let difference2 = yourAge - myAge;

if (myAge > yourAge) {
    console.log(`You are ${difference1} years younger than me.`)
} else if (myAge < yourAge) {
    console.log(`You are ${difference2} years older than me.`)
} else {
    console.log("We have the same age.")
}