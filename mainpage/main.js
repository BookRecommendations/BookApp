import { setUser } from '../utils.js';
import { getUser } from '../utils.js';
import { booksWithPic } from '../data/data.js';
import { addToUserObject, renderBookShelf } from './main-utils.js';

const formEl = document.getElementById('userform');
const resultsDiv = document.getElementById('resultsdiv');
const user = getUser();
console.log(user);
const booksReturned = [booksWithPic[0], booksWithPic[1], booksWithPic[3]];


if (!user.newUser) {
    console.log(user.Genre);
    formEl.style.display = 'block';
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = new FormData(formEl);
    addToUserObject(userData);
    const user = getUser;
    console.log(user);
    formEl.style.display = 'none';
    
    const returnedDiv = renderBookShelf(booksReturned);
    resultsDiv.append(booksReturned);
    
});

if (user.newUser) {
    formEl.style.display = 'none';
    resultsDiv.append(renderBookShelf(booksReturned));
}

const formButton = document.createElement('button');
const buttonDiv = document.getElementById('buttondiv');
formButton.textContent = 'Search Again';
buttonDiv.append(formButton);
formButton.addEventListener('click', () => {
    formEl.style.display = 'block';
});