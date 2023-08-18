// 1. The following is an array of 10 students ages

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age

ages.sort((a, b) => a - b);
console.log(ages);
let minAge = Number(ages[0]);
let maxAge = Number(ages[ages.length - 1]);
console.log(`Min age: ${minAge}`); // The first number of the list is the minimum
console.log(`Max age: ${maxAge}`);

// Find the median age (one middle item or two middle items divided by two)

let medAge;
const midIndex = Math.floor(ages.length / 2); // Half of the length
ages.length % 2 == 0
    ? medAge = (ages[midIndex - 1] + ages[midIndex]) / 2
    : medAge = ages[midIndex];
console.log(`Mid age: ${medAge}`);

// Find the average age (all items divided by number of items)

let sum = 0;
for (let i in ages) {
    sum += ages[i];
}
let avgAge = Math.floor(sum / ages.length);
console.log(`Avg age: ${avgAge}`);

// Compare the value of (min - average) and (max - average), use abs() method. Slice the first ten countries from the countries array

function difference(a, b) {
    return Math.abs(a - b);
}

console.log(`Difference between min and average: ${difference(minAge, avgAge)}`);
console.log(`Difference between max and average: ${difference(maxAge, avgAge)}`);

import { countries } from "./countries.js";

console.log(countries.slice(0, 10));
