
import { setUser, getUser, findById } from '../utils.js';
import { bookData } from '../data/data.js';

import { renderBookshelf } from '../mainpage/main-utils.js';


renderBookshelf();

const mainpageButton = document.createElement('button');
mainpageButton.textContent = 'Return to search page';
document.body.append(mainpageButton);
mainpageButton.addEventListener('click', () => {

    window.location = '../mainpage/index.html';
});