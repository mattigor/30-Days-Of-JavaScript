// 4. In countries array check if "Ethiopia" exists in the array. If it exists, print "ETHIOPIA". If it does not exist, add to the countries list

import { countries } from "./countries.js";

if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
    console.log(countries);
}
