// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for the first half

import { countries } from "./countries.js";

if (countries.length % 2 == 0) {
    // Divide the countries in two equal arrays
    let midIndex = countries.length / 2;
    let countriesOne = countries.slice(0, midIndex);
    let countriesTwo = countries.slice(midIndex, -1);
    console.log(countriesOne);
    console.log(countriesTwo);
} else {
    // Add one more country for the first half
    let midIndex = countries.length / 2;
    let countriesOne = countries.slice(0, midIndex);
    let countriesTwo = countries.slice(midIndex, -1);
    countriesOne.push("Brazil");
    console.log(countriesOne);
    console.log(countriesTwo);
}
