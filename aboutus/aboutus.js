// I would like to see all these files in kabob case--so, about-us.js and add-book.js, etc, instead of aboutus.js and addbook.js

const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

// cool state mutation function!
function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// this is really cool--treating the interval id as state, and changing it every time you cancel and set a new one is really cool thinking!
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});
