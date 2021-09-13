

const form = document.getElementById('userform');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = new FormData(form);

    const userObject = {
        Genre: userData.get('genre'),
        Theme: userData.get('theme'),
        BookLength: userData.get('length'),
        ReadingLevel: userData.get('level'),
    };
});

