import {
    setUser,
    getUser,
    findById,
    getTotalPagesRead
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

            bookDiv.style.background = 'orange';
            const user = getUser();
            if (user.booksread.some(book => book.id === bookObject.id)){
                alert(`${bookObject.title} is already in your list`);
            }
            else {
                alert(`You have added ${bookObject.title} to your finsihed books`);
                user.booksread.push(bookObject);
                setUser(user);
            }

        });
        
        const queueButton = document.createElement('button');
        queueButton.textContent = 'Add Book to Queue';
        queueButton.addEventListener('click', () => {

            bookDiv.style.background = 'yellow';
            bookDiv.style.background = 'khaki';
            const user = getUser();
            if (user.bookstoread.some(book => book.id === bookObject.id)){
                alert(`${bookObject.title} is already in your list`);
            }
            else {
                alert(`You have added ${bookObject.title} to your list`);
                user.bookstoread.push(bookObject);
                setUser(user);
            }

        });
        
        bookImage.src = `../data/${bookObject.imageLink}`;
        const bookDescription = document.createElement('div');
        bookDescription.textContent =
            `Title: ${bookObject.title}
        Author: ${bookObject.author}
        Pages: ${bookObject.pages}
        Year: ${bookObject.year}`;
        bookDiv.append(bookImage, bookDescription, shelfButton, queueButton);
        containerDiv.append(bookDiv);
        bookDescription.classList.add('book-description');
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
        removeRButton.classList.add('removebutton');
        removeRButton.addEventListener('click', () => {
            const user = getUser();
            alert(`You have removed ${user.booksread[i].title} from the list`);
            user.booksread.splice(i, 1);
            setUser(user);
            readBookDiv.remove();
            renderUserStats();
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
            setUser(user);
            queueBookDiv.remove();
            renderUserStats();

            
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
        noResults.textContent = ('Your Criteria returned 0 results, Therefore, we have given you a list of great books to enjoy');
    }
    return recArray;
}

export function renderUserStats() {
    const user = getUser();
    let pagesread = getTotalPagesRead();
    
    const statContainer = document.querySelector('.statcontainer');
    const pagesDiv = document.createElement('div');
    const bookcountDiv = document.createElement('div');
    const booklistDiv = document.createElement('div');
    pagesDiv.classList.add('stat');
    bookcountDiv.classList.add('stat');
    booklistDiv.classList.add('stat');

    if (statContainer.childNodes[0]) {
        statContainer.innerHTML = '';
    }
    pagesDiv.textContent = `Total pages read: ${pagesread}`;
    bookcountDiv.textContent = `Books read: ${user.booksread.length}`;
    booklistDiv.textContent = `Books on your read list: ${user.bookstoread.length}`;
    
    statContainer.append(bookcountDiv, pagesDiv, booklistDiv);
}

