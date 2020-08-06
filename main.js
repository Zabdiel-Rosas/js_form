// Brings the elements from the DOM into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.users');

// Create EventListener
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all the fields';

        // Remove msg
        setTimeout(() => msg.remove(), 2000);        
    } else {
        // Create li element
        const li = document.createElement('li');

        // Asing values to the element
        li.innerHTML = `<strong>${nameInput.value}:</strong> ${emailInput.value}`;

        // Append to the list
        userList.appendChild(li);

        // Clear inputs
        nameInput.value = '';
        emailInput.value = '';
    }
}
