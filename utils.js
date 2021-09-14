export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}
export function getUserRead(){
    const userObject = getUser();
    const userRead = userObject.booksread;
    return userRead; 
}
export function getUserToRead(){
    const userObject = getUser();
    const userToRead = userObject.bookstoread;
    return userToRead; 
}

export function getTotalPagesRead(){
    const booksRead = getUserRead();
    let pagesRead = 0;
    for (let book of booksRead){
        const pages = findById(booksRead, book.id);
        const totalPages = pages.pages;
        pagesRead = pagesRead + totalPages;
    }
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
        newUser: false,
        Genre:'',
        Theme:'',
        BookLength:'',
        ReadingLevel:''
    };
    return newUser;
}
export function findById(myArray, id) {
    for (let item of myArray) {
        if (item.id === id) {
            return item;
        }
    }
}
