import { setUser } from '../utils.js';
import { getUser } from '../utils.js';
import { booksWithPic } from '../data/data.js';
import { addToUserObject, renderBookShelf } from './main-utils.js';

const formEl = document.getElementById('userform');
const resultsDiv = document.getElementById('resultsdiv');
const user = getUser();
console.log(user);
const booksReturned = [booksWithPic[0], booksWithPic[1], booksWithPic[3]];


if (user.newUser) {
    console.log(user);
    formEl.style.display = 'block';
}

formEl.addEventListener('submit', (event) => {
    if (resultsDiv.childNodes[0]) {
        resultsDiv.removeChild(resultsDiv.childNodes[0]);
    }
    event.preventDefault();
    const userData = new FormData(formEl);
    const user = getUser();
    addToUserObject(user, userData);
    console.log(user);
    formEl.style.display = 'none';
    
    const returnedDiv = renderBookShelf(booksReturned);
    resultsDiv.append(returnedDiv);
    
});

if (!user.newUser) {
    console.log(user);
    formEl.style.display = 'none';
}

const formButton = document.createElement('button');
const buttonDiv = document.getElementById('buttondiv');
formButton.textContent = 'Search Again';
buttonDiv.append(formButton);
formButton.addEventListener('click', () => {
    formEl.style.display = 'block';
});