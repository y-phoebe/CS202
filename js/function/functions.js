// function declaration

// function greet() {
//     console.log("Good day!");
// }

// call function
// greet();
// greet();
// greet();


//function expression
// speak();

// const speak = function () {
//     console.log("Say Hello!");
// }

// speak();

// Hoisting

// arguments & parameters

// const speak = function (name,time) {
//     console.log(`good ${time} ${name}`);
// }

// speak("Justice", "day");

// returning values

// const calcArea = function (radius) {
//     let area = 3.14 * radius ** 2;
//     // console.log(area);
//     return area;    
// }

const calcArea = function (radius) {
    return 3.14 * radius ** 2;
    // console.log(area);
    // return area;    
}

const area = calcArea(5);

console.log(area);

