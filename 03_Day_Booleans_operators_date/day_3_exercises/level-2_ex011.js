/*
    11. Compare your first name length and your family name length and you should get this output:
    Your first name, ... is longer than your family name, ...
*/

const firstName = String(prompt("Enter your name: "));
const lastName = String(prompt("Enter your family name: "));

firstName.length > lastName.length

? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
: console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)