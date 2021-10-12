import { renderBookshelf, renderUserStats } from '../mainpage/main-utils.js';

renderBookshelf();
renderUserStats();

const buttonDiv = document.querySelector('.button-div-two');
// a little confused here. Why create a button on load rather than put it in your HTML and grab it from here?
const mainpageButton = document.createElement('button');
mainpageButton.classList.add('mainpagebutton'); // i'd like to see class names in kabob case for readability and standardization
mainpageButton.textContent = 'Return to search page';

buttonDiv.append(mainpageButton);
mainpageButton.addEventListener('click', () => {

    window.location = '../mainpage/index.html';
});
