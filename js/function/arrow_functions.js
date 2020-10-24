// regular function

// const calcArea = function (radius) {
//     return 3.14 * radius ** 2;
//     // console.log(area);
//     // return area;    
// }

// const area = calcArea(5);

// console.log(area);


// arrow function

// replace function keyword with arrow
// if code is one line, can move it up and delete "return"
// no need for parentheses either
const calcArea = radius => 3.14 * radius ** 2;

const area = calcArea(5);

console.log(area);

// EXAMPLE 2

// const greet = function () {
//     console.log("Hello World!");
// }
// greet();

// arrow function

// const greet = () => console.log("Hello World!");

// greet();

// EXAMPLE 3

// const sumAdd = function (a, b) {
//     add = a + b;
//     return add;
// }

// let c = sumAdd(5,4);

// console.log(c);

// arrow function

const sumAdd = (a,b) => a + b;

let c = sumAdd(5,4);

console.log(c);