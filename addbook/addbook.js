import { getUser, setUser } from '../utils.js';
import { userAddedBooks } from '../data/userdata.js';

const bookFormEl = document.querySelector('.bookform');
let bookArray = [];
const user = getUser();
setUser(user);

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
});

const userContainer = document.querySelector('.usercontainer');
for (let i = 0; i < user.useraddedbooks.length; i++) {
    const bookDiv = document.createElement('div');
    const bookImg = document.createElement('img');
    bookDiv.textContent = `Title: ${user.useraddedbooks[i].title}
Author: ${user.userbooksadded[i].author}
Genre: ${user.userbooksadded[i].genre}
Pages: ${user.userbooksadded[i].pages}
Year: ${user.userbooksadded[i].year}`;

    bookImg.src = user.booksadded[i].imageLink;
    userContainer.append(bookDiv, bookImg);
}
