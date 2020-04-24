const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
console.log("Hello");

let arrayPhotos = [
  'img/img-0', 'img/img-1', 'img/img-2',  'img/img-3',  'img/img-4',  'img/img-5',  'img/img-6'
];

let counter = 0;

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

function nextImg() {
    container.animate([{opacity:'0.1'},{opacity:'1'}], {duration:600, fill:'forwards'});
    if (counter === arrayPhotos.length - 1) {
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url('${arrayPhotos[counter]}.jpg')`
}

function prevImg() {
    container.animate([{opacity:'0.1'},{opacity:'1'}], {duration:600, fill:'forwards'});
    if (counter === 0) {
        counter = arrayPhotos.length;
    }
    counter--;
    container.style.backgroundImage = `url('${arrayPhotos[counter]}.jpg')`
}