// 3. Check if a day is weekend day or a working day. Your script will take day as an input

let day = String(prompt("Enter the day of the week: "));
day = day.toLowerCase();

if ((day == "saturday") || (day == "sunday")) {
    console.log(`${day} is a weekend.`);
} else if ((day == "monday") || (day == "tuesday") || (day == "wednesday") || (day == "thursday") || (day == "friday")) {
    console.log(`${day} is a working day.`);
} else {
    console.log(`I'm sorry, but ${day} is not a valid day.`);
}