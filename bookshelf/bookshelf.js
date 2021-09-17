import { renderBookshelf, renderUserStats } from '../mainpage/main-utils.js';

renderBookshelf();
renderUserStats();

const buttonDiv = document.querySelector('.button-div-two');
const mainpageButton = document.createElement('button');
mainpageButton.classList.add('mainpagebutton');
mainpageButton.textContent = 'Return to search page';

buttonDiv.append(mainpageButton);
mainpageButton.addEventListener('click', () => {

    window.location = '../mainpage/index.html';
});
