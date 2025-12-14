const slider = document.querySelector('.erhvervsslider');
const venstrePil = document.querySelector('.venstre');
const hoejrePil = document.querySelector('.hoejre');

// definerer hvor langt slideren skal rykke per klik //
const scrollLængde = 130;

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