import { getUser } from '../utils.js';
const formEl = document.getElementById('log-in');

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(formEl);
    const user = getUser();
    const newUser = { name:formData.get('name'), 
        password:formData.get('password'), 
        
    };
    if (user.name === newUser.name && user.password === newUser.password) {

        window.location = '../mainpage/index.html';
    } else { alert('Your password or username is incorrect');
    }


});

const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClass();
        panel.classList.add('active');
    });
});

function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
}
