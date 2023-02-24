// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const textNumbers = text.match(/\d+/g);
const salary = Number(textNumbers[0]);
const bonus = Number(textNumbers[1]);
const courses = Number(textNumbers[2]);

let sum = bonus + ((salary + courses) * 12);

console.log(`The total annual income of the person is ${sum.toLocaleString("pt-BR", {style: "currency", currency: "EUR"})}.`);