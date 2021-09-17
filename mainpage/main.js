import { getUser } from '../utils.js';
import { addToUserObject, getRecommendations, renderResults } from './main-utils.js';

const formEl = document.querySelector('.userform');
const resultsDiv = document.querySelector('.results-div');
const user = getUser();

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
    const noResults = document.getElementById('no-results');
    noResults.textContent = '';
    const returnedDiv = renderResults(getRecommendations());
    resultsDiv.append(returnedDiv);
   
});

const buttonDiv = document.querySelector('.button-div');
const showShelfButton = document.createElement('button');
buttonDiv.append(showShelfButton);
showShelfButton.textContent = 'Show Bookshelf';
showShelfButton.addEventListener('click', () => {
    window.location = '../bookshelf/index.html';
});
