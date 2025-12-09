/*const pakker = [
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

//åbne-/ lukke-funktion
   const btn_beregn = document.querySelector(".pakke button");

  btn_beregn.onclick = visPrisberegner

   function visPrisberegner() {
   btn_beregn.classList.toggle("aktiv");
   btn_beregn.nextElementSibling.classList.toggle("aktiv");
}

//---Beregner---
//Henter inputfeltet for afstand
let input_afstand = document.getElementById("bryllup-pakke1-transportaftand");

// Henter outputfeltet, hvor prisen skal stå
let output_pris = document.querySelector("#prisberegner-output");

// Lytter efter hvornår afstanden i inputfeltet ændrer sig
input_afstand.onchange = beregn;

function beregn(){
// Beregner prisen (skal stå inde i funktionen, for at den beregner ved hvert input - ellers virker det ikke)
  let pris = (input_afstand.valueAsNumber || 0) * 2.5 + 6000;
//Bestemmer hvad der skal stå i outputfeltet
 output_pris.innerText = " " + pris + " kr.";
}
