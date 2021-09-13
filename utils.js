export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem('USER');
    const userInfo = JSON.parse(stringyUser);
    return userInfo;
}

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
