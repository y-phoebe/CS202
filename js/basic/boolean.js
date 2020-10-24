// booleans & comparisons
// booleans - either true or false

console.log(true,false,"true","false");

// methods

let email = "justice@justicebanson.com";

// let result = email.includes("@");
let result = email.includes("!");

console.log(result);

// comparison operators - == (is value equivalent), != (not equal), >, <

let age = 20;

console.log(age == 20);
console.log(age == 30);
console.log(age != 20);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 20);

let password = "p@ssword1234";

console.log(password == "pass");
console.log(password != "pass");

// loose comparison == (compare values)

console.log(age == 20);
// true
console.log(age == "20");
// true

// strict comparison === (compare values and data types)

console.log(age === 20);
// true
console.log(age === "20");
// false, because "20" is a strain not a number -- a different data type than 20