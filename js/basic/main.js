// variables - a temporary storage location (placeholder) that is used to store data

// define - let, const, var

// output - alert(); // console.log()
console.log("You are here!");

// let
let age = 30;
let year = 2020;

console.log(age, year);

// const
// can't be changed
score = 6;

console.log(score);

// var
var points = 60;

console.log(points);

// let vs. var
// let is a local variable, var is a global variable

if (true) {
    var num = 40;
    console.log(num);
}

console.log(num);

// strings
// doubl quotes make it a string
console.log("Hello World");

let email = "justice@justicebanson.com"
console.log(email);

// string concatenation - join two or more variables with an html element(+)
let firstName = "Justice";
let lastName = "Banson";

let fullName = firstName + " " + lastName;
console.log(fullName);

// getting individual characters
console.log([0]);
// (javaScript starts at the number 0)

// string length // property
console.log(fullName.length);

// string methods (methods end in parenthesis)
console.log(fullName.toUpperCase());

let index = email.indexOf('@');
// will show the placement of the @ symbol in the email (7)
console.log(index);

let result = email.replace('u', 'a');
// will replace u in email with a