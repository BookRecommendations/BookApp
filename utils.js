export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}

// might be nice to refactor these with destructuring
export function getUserRead(){
    const { booksread } = getUser();

    return booksread; 
}
export function getUserToRead(){
    const { bookstoread } = getUser();

    return bookstoread; 
}

export function getTotalPagesRead(){
    const booksRead = getUserRead();
    let pagesRead = 0;
    // nice counting loop!
    for (let book of booksRead){
        const pages = book.pages;
        const totalPages = pages;
        pagesRead = pagesRead + totalPages;
    }
    return pagesRead;
}

export function getUser() {
    const stringyUser = localStorage.getItem('USER');
    const userInfo = JSON.parse(stringyUser);
    return userInfo;
}
// create user 
export function createUser(formData) {
    const newUser = {
        name: formData.get('name'),
        password: formData.get('password'),
        booksread: [],
        bookstoread: [],
        totalpgsrd: [],
        newUser: true,
        // i'd like to see all keys in objects lowercase, reserving capitalization for classes and React components
        Genre:'',
        BookLength:'',
        AverageRating:'',
        useraddedbooks: [],
    };
    return newUser;
}
export function findById(myArray, id) {
    for (let item of myArray) {
        if (Number(item.id) === Number(id)) {
            return item;
        }
    }
}
