const images = document.querySelectorAll('.slider-img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    
    if (currentIndex === 0) {
        currentIndex = 1;
    } else if (currentIndex === 1) {
        currentIndex = 3;
    } else if (currentIndex === 3) {
        currentIndex = 0;
    }
    
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);
