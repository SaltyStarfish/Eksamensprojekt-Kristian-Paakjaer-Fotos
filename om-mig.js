const punkter = document.querySelectorAll('.punkt');

function scrollEffekt() {
    const windowHeight = window.innerHeight;

    punkter.forEach(punkt => {
        const top = punkt.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            punkt.classList.add('aktiv');
        }
    });
}

window.addEventListener('scroll', scrollEffekt);
window.addEventListener('load', scrollEffekt);