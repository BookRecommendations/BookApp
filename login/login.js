import { getUser } from '../utils.js';
const formEl = document.getElementById('log-in');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(formEl);
    const { name, password } = getUser();
    // seems like you only build this object to use in one place. Might be worth it to just refer to them directly instead of make the object
    if (name === formData.get('name') && password === formData.get('password')) {
        window.location = '../mainpage/index.html';
    } else { 
        alert('Your password or username is incorrect');
    }


});

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    // this is a really cool function! nice idea to clear out the class from all the panels before adding the active class
    panel.addEventListener('click', ()=>{
        removeActiveClass();
        panel.classList.add('active');
    });
});

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
