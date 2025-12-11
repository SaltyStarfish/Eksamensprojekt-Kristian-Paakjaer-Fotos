/*const hero_slide1 = document.getElementById("div_hero-content-1");
const hero_slide2 = document.getElementById("div_hero-content-2");
const hero_slide3 = document.getElementById("div_hero-content-3");
const hero_slide4 = document.getElementById("div_hero-content-4");
const hero_slide5 = document.getElementById("div_hero-content-5");
const hero_slide6 = document.getElementById("div_hero-content-6");

const hero_karrusel = [hero_slide1, hero_slide2, hero_slide3, hero_slide4, hero_slide5, hero_slide6];

// hero_karrusel[0].style.display = "flex";
// hero_karrusel[1].style.display = "flex";
// hero_karrusel[2].style.display = "none";
// hero_karrusel[3].style.display = "none";
// hero_karrusel[4].style.display = "none";
// hero_karrusel[5].style.display = "none";

let vistNu = 0

//for-loop
for (i=0;i<hero_karrusel.length;i++){
hero_slide1[i].style.display = "none";}

window.setTimeout((skiftBilledeOgKomIgen, 3000));

function skiftBilledeOgKomIgen(){
  hero_karrusel[vistNu].style.display = "flex";
  vistNu++;
  if(vistNu >= hero_karrusel.length){
    vistNu = 0;
  }
};*/


/*måske findes en bedre løsning med arrays, og ændring af innerHTML via for-loops*/

let i = -1; //for at den viser slide 1 først
const slides = document.querySelectorAll(".div_hero-content");

// start slideshow-funktionen
showSlides();

//definér slideshow-funktionen:
function showSlides() {
  // skjul alle slides
  slides.forEach(slide => slide.style = "display: none");

  // "forøg slide index" - aka: bliver til næste slide
  i = (i + 1) % slides.length;
  //"%" kaldes en "modulo-operator" og er en matematisk operator, som finder "divitions-resten" . Det virker lidt random, men fungerer enormt godt her! Når (i+1) er mindre en længden af arrayet giver divisionen ikke et helt tal, og derfor vil der være en divitionsrest på det samme tal, som (i+1). Men hvis (i+1) giver præcis længden på arrayet, går divisionen op, og der er derfor en divisionsrest på 0, så i = 0, og vi hopper tilbage til start! Genialt!

  // vis det nuværende slide
  slides[i].style = "display: flex";

  // skift til næste slide hver 4. sekund
  setTimeout(showSlides, 4000);
}



//men hvorfor kører den automatisk i loop? Pga module-operatoren!