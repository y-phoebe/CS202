/* Adding and Changing Page Content ===================  */

// const para = document.querySelector('p');

// // innerText

// console.log(para.innerText);

// para.innerText = 'Justice is Awesome'
// para.innerText += 'Justice is Awesome'

// replace all p tags
const paras = document.querySelectorAll('p');

paras.forEach(() => {
    // your code here
    // console.log(para.innerText);
    // para.innerText = 'New Text';
    // para.innerText += 'New Text';

    // textContent
    para.textContent = 'New Text Content';
    
})

// // innerHTML
// const content = document.querySelector('.content');

// const title = document.querySelector('#page-title');

// title.innerHTML = '<h2>The New DOM</h2>';

// const people = ["Chloe", "Autumn", "Drew", "Justice"];
// people.forEach(person => {
//     content.innerHTML += <p>${person}</p>
// })


/* Changing style==================================== */

// const title = document.querySelector('#page-title');

// title.style.fontSize = '70px';
// title.style.color = 'red';
// title.style.textDecoration = 'line-through';





/* Add and Remove Classes ===================================  */

const content = document.querySelector('p');

content.classList.add('success');
content.classList.remove('success');