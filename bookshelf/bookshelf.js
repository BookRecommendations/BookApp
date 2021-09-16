
import { setUser, getUser, findById, getTotalPagesRead } from '../utils.js';
import { bookData } from '../data/data.js';

import { renderBookshelf, renderUserStats } from '../mainpage/main-utils.js';


renderBookshelf();
renderUserStats();


const buttonDiv = document.querySelector('.buttondivtwo');
const mainpageButton = document.createElement('button');
mainpageButton.classList.add('mainpagebutton');
mainpageButton.textContent = 'Return to search page';

buttonDiv.append(mainpageButton);
mainpageButton.addEventListener('click', () => {

    window.location = '../mainpage/index.html';
});