// 15. Create a human readable time format using the Date time object

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const hours = new Date().getHours();
const minutes = new Date().getMinutes();

console.log(`
    I. ${year}-${month}-${day} ${hours}:${minutes}
    II. ${day}-${month}-${year} ${hours}:${minutes}
    III. ${day}/${month}/${year} ${hours}:${minutes}
`);