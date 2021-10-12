import { getUser, setUser } from '../utils.js';
import { userAddedBooks } from '../data/userdata.js';

const bookFormEl = document.querySelector('.bookform');
const user = getUser();
setUser(user);
renderUserBooks();
bookFormEl.addEventListener('submit', (event) => {
    // as a rule, prevent default should always come first
    event.preventDefault();
    const user = getUser();
    const bookData = new FormData(bookFormEl);

    const bookObject = {
        id: bookData.get('id'),
        title: bookData.get('title'),
        author: bookData.get('author'),
        imageLink: bookData.get('image'),
        genre: bookData.get('genre'),
        pages: bookData.get('pages'),
    };
    user.useraddedbooks.push(bookObject);
    // does this array below ever get used? it seems like user.userAddedBooks does everything?
    userAddedBooks.push(bookObject);
    setUser(user);
    renderUserBooks();
});


function renderUserBooks() {
    const user = getUser();
    const userContainer = document.querySelector('.usercontainer');
    if (userContainer.childNodes[0]) {
        userContainer.innerHTML = '';
    }
    for (let book of user.useraddedbooks) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bookdiv');
        const bookImg = document.createElement('img');
        bookImg.classList.add('bookimg');
        // i wonder if it would have been better to give each of these items their own element instead of sticking them all inside the same div? 
        bookDiv.textContent = `Title: ${book.title}
Author: ${book.author}
Genre: ${book.genre}
Pages: ${book.pages}`;

        bookImg.src = book.imageLink;
        userContainer.append(bookDiv, bookImg);
    }
}
