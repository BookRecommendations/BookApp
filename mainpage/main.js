import { getUser, setUser } from '../utils.js';
import { bookData } from '../data/data.js';
import { addToUserObject, renderResults } from './main-utils.js';

const formEl = document.querySelector('.userform');
const resultsDiv = document.querySelector('.resultsdiv');
const user = getUser();
const booksReturned = [bookData[15], bookData[5], bookData[6]];


if (user.newUser) {
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

    formEl.style.display = 'none';
    
    const returnedDiv = renderResults(booksReturned);
    resultsDiv.append(returnedDiv);
    
});

if (!user.newUser) {

    formEl.style.display = 'none';
}

const formButton = document.createElement('button');
const buttonDiv = document.querySelector('.buttondiv');
formButton.textContent = 'Search Again';
buttonDiv.append(formButton);
formButton.addEventListener('click', () => {
    formEl.style.display = 'block';
});

const showShelfButton = document.createElement('button');
document.body.append(showShelfButton);
showShelfButton.textContent = 'Show Bookshelf';
showShelfButton.addEventListener('click', () => {
    window.location = '../bookshelf/index.html';
});
