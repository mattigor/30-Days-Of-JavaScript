// 1. Write a program which tells the number of days in a month

// jan = 31
// feb = 28
// mar = 31
// apr = 30
// may = 31
// jun = 30
// jul = 31
// aug = 31
// sep = 30
// oct = 31
// nov = 30
// dec = 31

let month = String(prompt("Enter the month: "));
month = month.toLowerCase();

switch (true) {
    case month == "january":
        console.log("January has 31 days.");
        break;
    case month == "february":
        console.log("February has 28 days.");
        break;
    case month == "march":
        console.log("March has 31 days.");
        break;
    case month == "april":
        console.log("April has 30 days.");
        break;
    case month == "may":
        console.log("May has 31 days.");
        break;
    case month == "june":
        console.log("June has 30 days.");
        break;
    case month == "july":
        console.log("July has 31 days.");
        break;
    case month == "august":
        console.log("August has 31 days.");
        break;
    case month == "september":
        console.log("September has 30 days.");
        break;
    case month == "october":
        console.log("October has 31 days.");
        break;
    case month == "november":
        console.log("November has 30 days.");
        break;
    case month == "december":
        console.log("December has 31 days.");
        break;
    default:
        console.log(`I'm sorry, but ${month} is not a valid month.`);
}