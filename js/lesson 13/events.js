
/* Events Basics ================  */

// Events are action or activities that the user or browser can react to

// click, mouseover, load, submit, resize, doubleclick

// addEventListener

// const button = document.querySelector('.btn');

// // button.addEventListener('click', () => {
// //     console.log('you clicked me!')
// // })

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log('item click');
//         // console.log(e);
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     });
// })






/* Creating and Removing Elements ================  */

const button = document.querySelector('.btn');

const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    // ul.innerHTML += `<li>something new</li>`;
    const li = document.createElement('li');
    li.innerHTML = 'something new';
    ul.append(li);
})

ul.addEventListener('click', e => {
    // e.target.remove();
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})