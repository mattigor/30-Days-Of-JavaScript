// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence

const sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love";
const found = sentence.match(/love/g).length + sentence.match(/Love/g).length;

console.log(`Number of love's found: ${found}`);