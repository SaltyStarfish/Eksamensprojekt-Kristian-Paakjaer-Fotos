const slides = document.querySelectorAll(".div_hero-content");//Henter alle hero-content-boxe - altså de forskellige slides, der skal skiftes mellem - giver er NodeList, hvilket minder om et array
let i = -1; //for at få vist slide[0] først

showSlides();// Slideshow-funktionen skal starte af sig selv, så ingen eventlistener er nødvendig

//definér slideshow-funktionen:
function showSlides() {
  slides.forEach(slide => slide.style = "display: none");  // skjuler alle slides som udgangspunkt

  i = (i + 1) % slides.length;  // index tallet forøges, hver gang funktionen kører, indtil det når "længden" af vores NodeList. Så starter den forfra*.

  slides[i].style = "display: flex";  // viser det  slide, som har det nuværendenår index-tal

  setTimeout(showSlides, 4000);  // kalder funktionen igen efter 4 sekunder. Ergo: skifter til næste slide hver 4. sekund
}
//*men hvorfor kører den automatisk i loop? Pga module-operatoren! 
//"%" kaldes en "modulo-operator" og er en matematisk operator, som finder "divisions-resten" . Det virker lidt random, men fungerer enormt godt her! Når (i+1) er mindre en længden af "arrayet" (eller NodeList) giver divisionen ikke et helt tal, og derfor vil der være en divisionsrest på det samme tal, som (i+1). Men hvis (i+1) giver præcis længden på arrayet, går divisionen op, og der er derfor en divisionsrest på 0, så i = 0, og vi hopper tilbage til start! Genialt!