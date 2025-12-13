// ----------ÅBNE/LUKKE-FUNKTION:-----------

// Finder alle BUTTONS, som er inden i .pakker
const buttons = document.querySelectorAll(".pakke button");

// Resten af KONSTANTERNE og FUNKTIONEN defineres inden for hver pakke afhængig af hvilken knap, der trykkes på:
buttons.forEach(button => {

  // Finder nærmeste div.pakke omkring button
  const pakke = button.closest("div.pakke");
  // Finder prisberegnings-dev'en i pakken
  const prisberegner = pakke.querySelector("div.prisberegner");
  // Finder teksten, som skal ændre sig inde i knappen
  const btn_tekst = button.querySelector(".btn_tekst");

  // Kalder funktionen visPrisberegner, når der klikkes på knappen 
  button.onclick = visPrisberegner

  function visPrisberegner() {
    //toggler klassen aktiv, som ændrer styling på knappen og roterer krydset
    button.classList.toggle("aktiv");
    //toggler klassen aktiv, som åbner og lukker prisberegneren
    prisberegner.classList.toggle("aktiv");
    //ændrer teksten på knappen
    if (btn_tekst.innerText === "Beregn din pris") {
      btn_tekst.innerText = "Luk prisberegner";
    } else {
      btn_tekst.innerText = "Beregn din pris";
    }
  }
});


// ----------BEREGNINGS-FUNKTION:-----------

// Finder alle INPUT.AFSTAND, som er inden i .pakker
const inputs_afstand = document.querySelectorAll(".pakke  input.afstand");

// Resten af KONSTANTERNE og FUNKTIONEN defineres inden for hver pakke afhængig af hvilket inputfelt, der interageres med:
inputs_afstand.forEach(input_afstand => {
  // Finder nærmeste div.pakke omkring inputtet
  const pakke = input_afstand.closest("div.pakke");
  // Finder prisen (uden transport) for den valgte pakke
  const pakke_pris = pakke.querySelector("span.pris").innerText;
  // Finder outputfeltet, hvor prisen skal stå
  const output_pris = pakke.querySelector(".prisberegner-output");

  // Eventlistener lytter efter, hvornår afstanden i inputfeltet ændrer sig, og kalder funktionen
  input_afstand.oninput = beregn;

  function beregn(){
  // Beregner prisen 
    const ny_pris = (input_afstand.valueAsNumber || 0) * 2.5 + Number(pakke_pris);
  //Bestemmer hvad der skal stå i outputfeltet
  output_pris.innerText = " " + ny_pris + " kr.";
  }
});