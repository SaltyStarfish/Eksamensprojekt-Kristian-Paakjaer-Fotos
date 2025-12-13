const spoergsmaal = document.getElementsByClassName("spoergsmaal");

for (let i = 0; i < spoergsmaal.length; i++) {
    spoergsmaal[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const faqContainer = this.closest(".faq");
    const svar = faqContainer.querySelector(".svar");

    svar.classList.toggle("aaben");

    if (svar.classList.contains("aaben")) {
        svar.style.height = svar.scrollHeight + "px"; // højden på indholdet sættes til den faktiske højde (afhængigt af svarets længde), så CSS-transitionen kan animere åbningen af svaret //
    } else {
        svar.style.height = "0"; // lukker svaret (tilbage til 0 højde), igen med animation via CSS-transitionen //
    }

    const ikon = this.querySelector(".faq-ikon");
});
}
