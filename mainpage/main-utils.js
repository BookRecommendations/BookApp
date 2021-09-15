import {
    setUser,
    getUser,
    findById
} from '../utils.js';
import {
    bookData
} from '../data/data.js';


export function addToUserObject(user, userData) {
    user.Genre = userData.get('genre');
    user.BookLength = userData.get('length');
    user.AverageRating = userData.get('average-rating');
    user.newUser = false;
    setUser(user);
    
}

export function renderResults(arrayResults) {
    const containerDiv = document.createElement('div');

    for (let i = 0; i < arrayResults.length; i++) {
        const user = getUser();
        let bookObject = findById(bookData, Number(arrayResults[i].id));
        console.log(bookObject);
        const bookDiv = document.createElement('div');
        const bookImage = document.createElement('img');
        
        const shelfButton = document.createElement('button');
        shelfButton.textContent = 'Add Completed Book to Bookshelf';
        shelfButton.addEventListener('click', () => {
            alert(`You have added ${bookObject.title} to your finsihed books`);
            bookDiv.style.background = 'orange';
            const user = getUser();
            user.booksread.push(bookObject);
            setUser(user);
            console.log(user.booksread);
            renderBookshelf();
        });
        
        const queueButton = document.createElement('button');
        queueButton.textContent = 'Add Book to Queue';
        queueButton.addEventListener('click', () => {
            alert(`You have added ${bookObject.title} to your list`);
            bookDiv.style.background = 'yellow';
            const user = getUser();
            user.bookstoread.push(bookObject);
            setUser(user);
            console.log(user.bookstoread);

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
    const bookShelfDiv = document.querySelector('.bookshelf');
    const hasReadDiv = document.createElement('div');
    hasReadDiv.classList = 'readcontainer';
    const queueDiv = document.createElement('div');
    queueDiv.classList = 'queuecontainer';

    hasReadDiv.textContent = 'Books you have read:';
    queueDiv.textContent = 'Books you want to read next';

    for (let i = 0; i < user.booksread.length; i++) {
        const readBookDiv = document.createElement('div');
        const readBookImg = document.createElement('img');
        readBookDiv.classList = 'readbookdiv';
        readBookImg.classList = 'readbookimg';
        readBookImg.src = `/data/${user.booksread[i].imageLink}`;
        readBookDiv.textContent =
            `Title: ${user.booksread[i].title},
        Author: ${user.booksread[i].author}
        Genre: ${user.booksread[i].genre}
        Pages: ${user.booksread[i].pages}
        Year: ${user.booksread[i].year}`;

        readBookDiv.append(readBookImg);
        hasReadDiv.append(readBookDiv);
    }
    for (let j = 0; j < user.bookstoread.length; j++) {
        const queueBookDiv = document.createElement('div');
        const queueBookImg = document.createElement('img');
        queueBookDiv.classList = 'queuebookdiv';
        queueBookImg.classList = 'queuebookimg';
        queueBookImg.src = `/data/${user.bookstoread[j].imageLink}`;
        queueBookDiv.textContent = `Title: ${user.bookstoread[j].title},
        Author: ${user.bookstoread[j].author}
        Genre: ${user.bookstoread[j].genre}
        Pages: ${user.bookstoread[j].pages}
        Year: ${user.bookstoread[j].year}`;

        queueBookDiv.append(queueBookImg);
        queueDiv.append(queueBookDiv);
    }
    bookShelfDiv.append(hasReadDiv, queueDiv);
}

export function bookLength(book) {
    if (book.pages < 200) {
        return 'short';
    } else if (book.pages > 200 && book.pages < 400) {
        return 'medium';
    } else return 'long';
}


export function bookRating(book) {
    
    if (book.average_rating > 3 && book.average_rating < 3.9) {
        return '3';
    }
    else if (book.average_rating > 3.9 && book.average_rating < 4.49) {
        return '4';
    } else return '4.5';
}

export function getRecommendations() {
    const user = getUser();
    let recArray = [];
    for (let book of bookData) {
        if (book.genre === user.Genre && (bookLength(book) === user.BookLength) && (bookRating(book) === user.AverageRating)) {
           
            recArray.push(book);
        }
    }
    console.log(user.Genre, user.BookLength, user.AverageRating);
    console.log(recArray);
    return recArray;
}

