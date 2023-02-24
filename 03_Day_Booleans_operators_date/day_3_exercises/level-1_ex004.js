/*
    4. Boolean is either true or false.
    I. Write three JavaScript statement which provide truthy value.
    II. Write three JavaScript statement which provide falsy value.
*/

let number = 2023;
let array = [1, 2, 3, 4, 5];
const string = "Word";
let year = new Date().getFullYear();
let undef;

console.log(typeof number == typeof year);
console.log((typeof string != "Word") || (typeof string != typeof year));
console.log(year >= number);
console.log(typeof year == typeof undef);
console.log((array[4] + year > number) && (year + number < number));
console.log(typeof (array[3] + array[4]) != typeof year);