import { findById } from '../utils.js';
import { booksWithPic } from '../data/data.js';


export function renderBookShelf(arrayResults) {
    const containerDiv = document.createElement('div');

    for (let i = 0; i < arrayResults.length; i++) {
        let bookObject = findById(booksWithPic, arrayResults[i].id);
        const bookDiv = document.createElement('div');
        const bookImage = document.createElement('img');
        bookImage.src = bookObject.img;
        const bookDescription = document.createElement('div');
        bookDescription.textContent = `Title: ${bookObject.title}, Author: ${bookObject.author}, Genre: ${bookObject.genre}, Pages: ${bookObject.pages}, Year: ${bookObject.year}, Language: ${bookObject.language}`;
        bookDiv.append(bookImage, bookDescription);
        containerDiv.append(bookDiv);
    }
    
    return containerDiv;
}