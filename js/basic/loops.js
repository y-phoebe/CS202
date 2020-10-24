//for loops

/*
for(initializer;condition;incremental){
    // run your code here
}
*/

// ++ keeps adding 1 to the number (i)
for (let i = 0; i < 5; i++){
    console.log("loop:",i);
}

const names = ["Michael", "John", "Kyle", "James", "Justice"];

for (let i = 0; i < names.length; i++) {
    // console.log(i);
    console.log(names[i]);

    let html = ` <li>${names[i]}</li>`;

    document.write(html);
}

// while loops

let i = 0;

while (i < 5) {
    console.log(i);
    i++;    
}

// do while loops

let i = 3;

do {
    console.log(i);
    i++;
} while (i < 5);