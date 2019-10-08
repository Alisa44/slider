const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

function nextImg() {
    if (counter === 2) {
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url('img/img-${counter}.jpg')`
}

function prevImg() {
    if (counter === 0) {
        counter = 3;
    }
    counter--;
    container.style.backgroundImage = `url('img/img-${counter}.jpg')`
}