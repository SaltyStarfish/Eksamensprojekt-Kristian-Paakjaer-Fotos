const slider = document.querySelector('.anmeldelser-slider');
const venstrePil = document.querySelector('.venstre');
const hoejrePil = document.querySelector('.hoejre');

// definerer hvor langt slideren skal rykke per klik //
const scrollLængde = 370;

venstrePil.addEventListener('click', () => {
    slider.scrollBy({
        left: -scrollLængde,
        behavior: 'smooth'
    });
});

hoejrePil.addEventListener('click', () => {
    slider.scrollBy({
        left: scrollLængde,
        behavior: 'smooth'
    });
});