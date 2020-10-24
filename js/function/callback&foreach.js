// callbacks & forEach

const mFunc = (callbackfunc) => {
    let value = 50;
    callbackfunc(value);
}

myFunc(function(value){
    console.log(value);
});

//callback Function Example

let people = ["Michael", "John", "Max", "Justice"];

// will print function four times because there are four names in the array
// people.forEach(function () {
//     console.log("something");
// });

// simplify with arrow function

// people.forEach((person) => {
//     console.log(person);
// });

// people.forEach((person, index) => {
//     console.log(index, person);
// });

people.forEach((person, index) => {
    console.log(`${index}, -Hello ${person}`);
});