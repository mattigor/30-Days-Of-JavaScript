// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits (7 hours should be 07 and 5 minutes should be 05)

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const formattedMonth = month.toString().padStart(2, "0");
const formattedDay = day.toString().padStart(2, "0");
const formattedHours = hours.toString().padStart(2, "0");
const formattedMinutes = minutes.toString().padStart(2, "0");

console.log(`
    I. ${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}
`);