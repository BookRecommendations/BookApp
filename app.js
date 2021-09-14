import { createUser, setUser } from './utils.js';

// initialize global state
const formEl = document.getElementById('sign-up');

//submit event listener
formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(formEl);
    const user = createUser(formData);
    setUser(user);
    window.location = './login/index.html';
});