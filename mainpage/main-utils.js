import { setUser, getUser, findById } from '../utils.js';
import { booksWithPic } from '../data/data.js';


export function addToUserObject(user, userData){
    user.Genre = userData.get('genre');
    user.BookLength = userData.get('length');
    user.ReadingLevel = userData.get('level');
    user.newUser = false;
    setUser(user);
    console.log(user);
}

export function renderBookShelf(arrayResults) {
    const containerDiv = document.createElement('div');

    for (let i = 0; i < arrayResults.length; i++) {
        const user = getUser();
        let bookObject = findById(booksWithPic, arrayResults[i].id);
        console.log(bookObject);
        const bookDiv = document.createElement('div');
        const bookImage = document.createElement('img');
        const shelfButton = document.createElement('button');
        shelfButton.textContent = 'Add Completed Book to Bookshelf';
        shelfButton.addEventListener('click', () => {
            user.booksread.push(bookObject);
        });
        const queueButton = document.createElement('button');
        queueButton.textContent = 'Add Book to Queue';
        queueButton.addEventListener('click', () => {
            user.bookstoread.push(bookObject);
        });

        bookImage.src = `/data/${bookObject.imageLink}`;
        const bookDescription = document.createElement('div');
        bookDescription.textContent = 
        `Title: ${bookObject.title}
        Author: ${bookObject.author}
        Genre: ${bookObject.genre}
        Pages: ${bookObject.pages}
        Year: ${bookObject.year}`;
        bookDiv.append(bookImage, bookDescription, shelfButton, queueButton);
        containerDiv.append(bookDiv);
        
        bookDiv.style.border = '5px solid brown';
        bookDiv.style.margin = '15px';
        bookDiv.style.padding = '10px';

        
    }
    
    return containerDiv;
}

export function renderBookshelf() {
const user = getUser();
const hasReadDiv = document.createElement('div');
const queueDiv = document.createElement('div');

for (let i = 0; i < user.booksread.length; i++){
const readBookDiv = document.createElement('div');
const readBookImg = document.createElement('img');
readBookImg.src = `/data/${user.booksread[i].imageLink}`;
}




}