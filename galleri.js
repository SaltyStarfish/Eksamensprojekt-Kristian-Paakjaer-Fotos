const slider = document.querySelector(".galleri-slider");

document.querySelector(".venstre").addEventListener("click", () => {
    slider.scrollBy({
        left: -400,
        behavior: "smooth",
    });
});

document.querySelector(".hoejre").addEventListener("click", () => {
    slider.scrollBy({
        left: 400,
        behavior: "smooth",
    });
});