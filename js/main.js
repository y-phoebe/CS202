const from = document.querySelector('.signup-form');
// const name = document.querySelector('#name');
    // no need to create all variables on the page
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('submitted');

    // console.log(name.value);

    console.log(form.name.value);

    // variables
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    const cpassword = form.cpassword.value;
    const phone = form.phone.value;

    // Regular Expression
    // regex101.com
    const namecheck = /^[A-Za-z]{2, 20}$/;
    const passwordcheck = /^[a-zA-Z*@]{3,}$/;

    if (namecheck.test(name)) {
        // alert("Name is correct!");
        feedback.innerHTML = "";
    }
    else {
        feedback.innerHTML = "** Name is invalid";
        form.name.style.border = '1px solid red';
        return false;
    }

    form.submit();
})

// const password = 'skyfall!';

// // this is regular expression?
// // [from _ to _ (sep. by -)]{lowest # of characters, highest}
// const pattern = /^[A-Za-z0-9]{3,}&/;

// let result = pattern.test(password);

// if (result) {
//     // feedback
//     alert("Password is correct!");
// }
// else {
//     alert("Password is incorrect!");
// }