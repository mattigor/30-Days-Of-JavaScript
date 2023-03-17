// 13. Check if a certain company exists in the itCompanies array. If it exists, return the company, else, return a company is not found

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

if (itCompanies.includes('Apple') == true) {
    console.log(`The company ${itCompanies[3]} belongs to the array`);
} else {
    console.log(`The company ${itCompanies[3]} is not found`)
}