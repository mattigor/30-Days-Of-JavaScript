// 2. Find the middle country(ies) in the countries array

import { countries } from "./countries.js";

let midIndex = Math.floor(countries.length / 2);
let midCountry = countries[midIndex];

console.log(midCountry);