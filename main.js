// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create li element
        const li = document.createElement('li');
        
        li.innerHTML = `<strong>${nameInput.value}</strong>: ${emailInput.value}`;

        // Append li to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}