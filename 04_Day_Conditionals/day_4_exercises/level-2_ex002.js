/*
    2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
    * September, October or November, the season is Autumn.
    * December, January or February, the season is Winter.
    * March, April or May, the season is Spring
    * June, July or August, the season is Summer
*/

let season = String(prompt("Enter the month: "));
season = season.toLowerCase();

if ((season == "september") || (season == "october") || (season == "november")) {
    console.log("The season is Autumn.");
} else if ((season == "december") || (season == "january") || (season == "february")) {
    console.log("The season is Winter.");
} else if ((season == "march") || (season == "april") || (season == "may")) {
    console.log("The season is Spring.");
} else if ((season == "june") || (season == "july") || (season == "august")) {
    console.log("The season is Summer.");
} else {
    console.log(`I'm sorry, but ${season} is not a valid season`);
}