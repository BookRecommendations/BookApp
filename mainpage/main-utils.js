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
    containerDiv.classList.add('cnt-div');
    for (let i = 0; i < arrayResults.length; i++) {
        let bookObject = findById(bookData, Number(arrayResults[i].id));
        console.log(bookObject);
        const bookDiv = document.createElement('div');
        const bookImage = document.createElement('img');
        bookImage.classList.add ('resultsimages');
        bookDiv.classList.add('returned-book');
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
        
        bookImage.src = `../data/${bookObject.imageLink}`;
        const bookDescription = document.createElement('div');
        bookDescription.textContent =
            `Title: ${bookObject.title}
        Author: ${bookObject.author}
        Genre: ${bookObject.genre}
        Pages: ${bookObject.pages}
        Year: ${bookObject.year}`;
        bookDiv.append(bookImage, bookDescription, shelfButton, queueButton);
        containerDiv.append(bookDiv);

    }

    return containerDiv;
}

export function renderBookshelf() {
    const user = getUser();
    const bookShelfDiv = document.querySelector('.bookshelf');
    const hasReadDiv = document.createElement('div');
    hasReadDiv.classList.add('readcontainer');
    const queueDiv = document.createElement('div');
    queueDiv.classList.add('queuecontainer');

    hasReadDiv.textContent = 'Books read:';
    queueDiv.textContent = 'Books to read next:';

    for (let i = 0; i < user.booksread.length; i++) {
        const readBookDiv = document.createElement('div');
        const readBookImg = document.createElement('img');
        const removeRButton = document.createElement('button');
        removeRButton.textContent = `Remove from list`;
        removeRButton.classList.add('removButton');
        removeRButton.addEventListener('click', () => {
            const user = getUser();
            alert(`You have removed ${user.booksread[i]} from the list`);
            user.booksread.splice(i, 1);
            console.log(user.booksread);
            setUser(user);
            readBookDiv.remove();


        });
        readBookDiv.classList.add('readbookdiv');
        readBookImg.classList.add('readbookimg');
        readBookImg.src = `../data/${user.booksread[i].imageLink}`;
        readBookDiv.textContent =
            `Title: ${user.booksread[i].title},
        Author: ${user.booksread[i].author}
        Genre: ${user.booksread[i].genre}
        Pages: ${user.booksread[i].pages}
        Year: ${user.booksread[i].year}`;

        readBookDiv.append(readBookImg, removeRButton);
        hasReadDiv.append(readBookDiv);
    }
    for (let j = 0; j < user.bookstoread.length; j++) {
        const queueBookDiv = document.createElement('div');
        const queueBookImg = document.createElement('img');
        const removeQButton = document.createElement('button');
        removeQButton.textContent = 'Remove from list';
        removeQButton.classList.add('removebutton');
        removeQButton.addEventListener('click', () => {
            const user = getUser();
            alert(`You have removed ${user.bookstoread[j].title} from your books to read`);
            user.bookstoread.splice(j, 1);
            console.log(user.bookstoread);
            setUser(user);
            queueBookDiv.remove();

            
        });
        queueBookDiv.classList.add('queuebookdiv');
        queueBookImg.classList.add('queuebookimg');
        queueBookImg.src = `../data/${user.bookstoread[j].imageLink}`;
        queueBookDiv.textContent = `Title: ${user.bookstoread[j].title},
        Author: ${user.bookstoread[j].author}
        Genre: ${user.bookstoread[j].genre}
        Pages: ${user.bookstoread[j].pages}
        Year: ${user.bookstoread[j].year}`;

        queueBookDiv.append(queueBookImg, removeQButton);
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
let defaultArray = [bookData[42], bookData[43], bookData[46], bookData[62], bookData[69], bookData[88], bookData[20],
    bookData[126], bookData[17], bookData[3], bookData[104], bookData[106], bookData[111], bookData[115]];
    
export function getRecommendations() {
    const user = getUser();
    let recArray = [];
    for (let book of bookData) {
        if (book.genre === user.Genre && (bookLength(book) === user.BookLength) && (bookRating(book) === user.AverageRating)) {
           
            recArray.push(book);
        }
    }
    if (recArray.length === 0) {
        const noResults = document.getElementById('noResults');
        recArray = defaultArray;
        noResults.textContent = ('Your Criteria returned 0 results, Therefore we have given you a list of great books to enjoy');
    }
    return recArray;
}

