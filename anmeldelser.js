const slider = document.querySelector('.anmeldelser-slider');

document.querySelector('.venstre').addEventListener('click', () => {
    slider.scrollBy({
        left: -300,
        behavior: 'smooth',
    });
});

document.querySelector('.hoejre').addEventListener('click', () => {
    slider.scrollBy({
        left: 300,
        behavior: 'smooth',
    });
});