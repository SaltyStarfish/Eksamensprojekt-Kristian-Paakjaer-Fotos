//Henter alle hero-content-boxe - altså de forskellige sider, som der skal skiftes mellem - giver er HTML-collection, hvilket minder om et array
const slides = document.querySelectorAll(".div_hero-content");
let i = -1; //for at den viser slide 1 først

// Slideshow-funktionen skal starte af sig selv, så ingen eventlistener er nødvendig
showSlides();

//definér slideshow-funktionen:
function showSlides() {

  // skjuler alle slides som udgangspunkt
  slides.forEach(slide => slide.style = "display: none");

  // forøger "slide-indexet" - dvs index tallet stiger, indtil det når "længden" af vores HTML-collection. Så starter den forfra*.
  i = (i + 1) % slides.length;


  // vis det nuværende slide, som så skifter, fordi index-tallet skifter
  slides[i].style = "display: flex";

  // kører loopet igennem hver fjerde sekund - dvs. skifter til næste slide hver 4. sekund
  setTimeout(showSlides, 4000);
}

//*men hvorfor kører den automatisk i loop? Pga module-operatoren! 

//"%" kaldes en "modulo-operator" og er en matematisk operator, som finder "divisions-resten" . Det virker lidt random, men fungerer enormt godt her! Når (i+1) er mindre en længden af "arrayet" (eller HTML-collectionen) giver divisionen ikke et helt tal, og derfor vil der være en divisionsrest på det samme tal, som (i+1). Men hvis (i+1) giver præcis længden på arrayet, går divisionen op, og der er derfor en divisionsrest på 0, så i = 0, og vi hopper tilbage til start! Genialt!