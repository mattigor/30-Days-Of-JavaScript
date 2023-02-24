/*
    Use the Date object to do the following activities
    I. What is the year today?
    II. What is the month today as a number?
    III. What is the date today?
    IV. What is the day today as a number?
    V. What is the hours now?
    VI. What is the minutes now?
    VII. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const now = new Date();

console.log(`Today's year is ${now.getFullYear()}.`);
console.log(`Today's month is ${now.getMonth()}.`);
console.log(`Today's date is ${now.getDate()}.`);
console.log(`Today as a number is ${now.getDay()}.`);
console.log(`Today's hour now is ${now.getHours()}.`);
console.log(`Today's minutes now is ${now.getMinutes()}.`);
console.log(`The numbers of seconds elapsed from January 1, 1970 to now is ${now.getTime()}.`);