/* 
    6. Figure out the result of the following expressions first without using console.log(). After you decide the result, confirm it by using console.log()
    I. 4 > 3 && 10 < 12
    II. 4 > 3 && 10 > 12
    III. 4 > 3 || 10 < 12
    IV. 4 > 3 || 10 > 12
    V. !(4 > 3)
    VI. !(4 < 3)
    VII !(false)
    VIII. !(4 > 3 && 10 < 12)
    IX. !(4 > 3 && 10 > 12)
    X. !(4 === '4')
    XI. There is no 'on' in both dragon and python
*/

const dr = "dragon";
const py = "python";

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(
    dr.includes("on") && py.includes("on") ? `It is included in both ${dr} and ${py}.` : "It isn't."
);