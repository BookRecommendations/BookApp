import { getUser, setUser } from '../utils.js';
import { userAddedBooks } from '../data/userdata.js';

const bookFormEl = document.querySelector('.bookform');
let bookArray = [];
const user = getUser();
setUser(user);
renderUserBooks();
bookFormEl.addEventListener('submit', (event) => {
    const user = getUser();
    event.preventDefault();
    const bookData = new FormData(bookFormEl);

    const bookObject = {
        id: bookData.get('id'),
        title: bookData.get('title'),
        author: bookData.get('author'),
        imageLink: bookData.get('image'),
        genre: bookData.get('genre'),
        pages: bookData.get('pages'),
    };
    console.log(bookObject);
    user.useraddedbooks.push(bookObject);
    userAddedBooks.push(bookObject);
    setUser(user);
    console.log(bookArray);
    console.log(user);
    renderUserBooks();
});


function renderUserBooks() {
    const user = getUser();
    const userContainer = document.querySelector('.usercontainer');
    if (userContainer.childNodes[0]) {
        userContainer.innerHTML = '';
    }
    for (let i = 0; i < user.useraddedbooks.length; i++) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bookdiv');
        const bookImg = document.createElement('img');
        bookImg.classList.add('bookimg');
        bookDiv.textContent = `Title: ${user.useraddedbooks[i].title}
Author: ${user.useraddedbooks[i].author}
Genre: ${user.useraddedbooks[i].genre}
Pages: ${user.useraddedbooks[i].pages}
Year: ${user.useraddedbooks[i].year}`;

        bookImg.src = user.useraddedbooks[i].imageLink;
        userContainer.append(bookDiv, bookImg);
    }
}
