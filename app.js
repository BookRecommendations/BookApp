import { createUser, setUser } from './utils.js';

// initialize global state
const formEl = document.getElementById('sign-up');

//submit event listener
formEl.addEventListener('submit', (event) => { // I'd rather see these as arrow functions, just as a standard and to prevent inconsistent behavior with the "this" keyword
    event.preventDefault();
    
    const formData = new FormData(formEl);
    const user = createUser(formData);
    setUser(user);
    window.location = './login/index.html';
});