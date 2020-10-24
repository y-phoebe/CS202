/* DOM */

// query selector
// const para = document.querySelector('p');

// console.log(para);

// need # to select id
// const para1 = document.querySelector('#page-title');

// console.log(para1);

// const content = document.querySelector('.content');

// console.log(content);

// will print out all of the p tags
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
});

console.log(paras)




/* Ways to Query the DOM ====================== */


// element by id

const title = document.getElementById('page-title');

console.log(title);

// element by tag name

const para = document.getElementsByTagName('p');

console.log(para);