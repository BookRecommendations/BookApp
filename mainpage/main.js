import { setUser } from '../utils.js';
import { getUser } from '../utils.js';

const form = document.getElementById('userform');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = new FormData(form);
    const user = getUser();
    console.log(user);
    console.log(userData.get('genre'));
    user.Genre = userData.get('genre');
    user.Theme = userData.get('theme');
    user.BookLength = userData.get('length');
    user.ReadingLevel = userData.get('level');

    setUser(user);
    console.log(user);
    
});

const booksReturned = [];


