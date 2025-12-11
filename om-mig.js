const highlights = document.querySelectorAll('.karriere-highlights');

function scrollEffekt() {
    const windowHeight = window.innerHeight;

    highlights.forEach(highlight => {
        const elementTop = highlight.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            highlight.classList.add('aktiv');
        }
    });
}

window.addEventListener('scroll', scrollEffekt);