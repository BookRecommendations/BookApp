import { getUser } from '../utils.js';
import { addToUserObject, getRecommendations, renderResults } from './main-utils.js';

const formEl = document.querySelector('.user-form');
const resultsDiv = document.querySelector('.results-div');

formEl.addEventListener('submit', (event) => {
    // so, if there is a first child, delete it on submit? nice!
    const firstChild = resultsDiv.childNodes[0];

    if (firstChild) resultsDiv.removeChild(firstChild);
    
    event.preventDefault();
    const userData = new FormData(formEl);
    const user = getUser();
    // cool function, since it takes in the FormData directly.
    addToUserObject(user, userData);
    const noResults = document.getElementById('no-results');
    noResults.textContent = '';
    // cool -- I like that it's clear to y'all that you can call this function inside a function argument and treat it as an object. Not an easy concept to understand!
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
