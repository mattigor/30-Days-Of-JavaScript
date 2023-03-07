// 8. Calculate the value of y (y = x² + 6x + 9). Try to use different x values and figure out at what x value y is 0

/*
    First try, x = 0:
    y = 0² + (6 * 0) + 9
    y = 0 + 9 = 9

    Second try, x = -1:
    y = -1² + (6 * -1) + 9
    y = 1 +(-6) + 9
    y = 1 - 6 + 9 = 4

    Third try, x = -2:
    y = -2² + (6 * -2) + 9
    y = 2 +(-6) + 9
    y = 2 - 6 + 9 = 1

    Fourth try, x = -3:
    y = -3² + (6 * -3) + 9
    y = -3² +(-6) + 9
    y = 3 - 6 + 9 = 0
*/

let x = Number(prompt("Enter a value for x: "));

y = (Math.pow(x, 2)) + 6 * x + 9;

console.log(y);
console.log(y === 0 ? "It's value is 0" : "It's value isn't 0");