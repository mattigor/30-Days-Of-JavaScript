// 2. Use match() to count the number of all because in the following sentence: 'You cannot end a sentence with because because because is a conjunction'

const sentence = "You cannot end a sentence with because because because is a conjunction";
const found = sentence.match(/because/g).length;

console.log(`Number of because's found: ${found}.`);