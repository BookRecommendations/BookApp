
import { setUser, getUser, findById, getTotalPagesRead } from '../utils.js';
import { bookData } from '../data/data.js';

import { renderBookshelf } from '../mainpage/main-utils.js';


renderBookshelf();
const user = getUser();

let pagesread = getTotalPagesRead();
const statContainer = document.querySelector('.statcontainer');
const pagesDiv = document.createElement('div');
const bookcountDiv = document.createElement('div');
const booklistDiv = document.createElement('div');
pagesDiv.classList.add('stat');
bookcountDiv.classList.add('stat');
booklistDiv.classList.add('stat');

pagesDiv.textContent = `Total pages read: ${pagesread}`;
bookcountDiv.textContent = `Books read: ${user.booksread.length}`;
booklistDiv.textContent = `Books on your read list: ${user.bookstoread.length}`;

statContainer.append(bookcountDiv, pagesDiv, booklistDiv);

const buttonDiv = document.querySelector('.buttondiv');
const mainpageButton = document.createElement('button');
mainpageButton.textContent = 'Return to search page';

buttonDiv.append(mainpageButton);
mainpageButton.addEventListener('click', () => {

    window.location = '../mainpage/index.html';
});