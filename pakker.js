

/*
// --- Åbne-/lukke-funktion ---
document.querySelectorAll(".pakke button").forEach(function (btn_beregn) {
  btn_beregn.onclick = function () {
    // `this` is the clicked button
    const pakke = this.closest(".pakke");
    const btn_beregn_tekst = this.querySelector("span.btn_tekst");
    const prisberegnerPanel = this.nextElementSibling; // assumes panel is next sibling

    // Toggle classes
    this.classList.toggle("aktiv");
    prisberegnerPanel.classList.toggle("aktiv");

    // Change button text
    if (btn_beregn_tekst.innerText === "Beregn din pris") {
      btn_beregn_tekst.innerText = "Luk prisberegner";
    } else {
      btn_beregn_tekst.innerText = "Beregn din pris";
    }
  };
});

// --- Beregner ---
document.querySelectorAll(".pakke .transportafstand").forEach(function (input_afstand) {
  input_afstand.oninput = function () {
    // `this` is the input field
    const pakke = this.closest(".pakke");
    const output_pris = pakke.querySelector(".prisberegner-output");

    // Optional: read config from data attributes
    const base = Number(pakke.dataset.base ?? 6000);
    const rate = Number(pakke.dataset.rate ?? 2.5);

    // Calculate price
    const afstand = this.valueAsNumber || 0;
    const pris = afstand * rate + base;

    // Update output
    output_pris.innerText = " " + pris.toLocaleString("da-DK") + " kr.";
  };
});
*/

//---åbne-/ lukke-funktion---
const btn_beregn = document.querySelector(".pakke button");
const btn_beregn_tekst = btn_beregn.querySelector("span.btn_tekst");

btn_beregn.onclick = visPrisberegner

function visPrisberegner() {
//toggler klassen aktiv, som ændrer styling på knappen og roterer krydset
  btn_beregn.classList.toggle("aktiv");
//toggler klassen aktiv, som åbner og lukker prisberegneren
  btn_beregn.nextElementSibling.classList.toggle("aktiv");
//ændrer teksten på knappen
  if (btn_beregn_tekst.innerText === "Beregn din pris") {
    btn_beregn_tekst.innerText = "Luk prisberegner";
  } else {
    btn_beregn_tekst.innerText = "Beregn din pris";
  }
}

//---Beregner---
//Henter inputfeltet for afstand
let input_afstand = document.getElementById("bryllup-pakke1-transportaftand");

// Henter outputfeltet, hvor prisen skal stå
let output_pris = document.querySelector(".prisberegner-output");

// Lytter efter hvornår afstanden i inputfeltet ændrer sig
input_afstand.onchange = beregn;

function beregn(){
// Beregner prisen (skal stå inde i funktionen, for at den beregner ved hvert input - ellers virker det ikke)
  let pris = (input_afstand.valueAsNumber || 0) * 2.5 + 6000;
//Bestemmer hvad der skal stå i outputfeltet
 output_pris.innerText = " " + pris + " kr.";
}


/* Arrays??

const pakker = [
  {
    navn: "Bryllupspakke 1",
    pris: 6000,
    transport_pr_km: 2.5,
    beskrivelse: ["Vielse", "Bryllupsshoot", "1 times reception*"],
    note: "*Hvis der ikke afholdes reception, er det første time af festen"
  },
    {
    navn: "Bryllupspakke 2",
    pris: 10500,
    transport_pr_km: 2.5,
    beskrivelse: ["Hele dagen", "Fra vielse til og med brudevals*"],
    note: "*Dog senest kl 1"
  }
]*/
