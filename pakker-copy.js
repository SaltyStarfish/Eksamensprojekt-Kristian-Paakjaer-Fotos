
  const btns_beregn = document.querySelectorAll(".pakke .btn_beregn");

  for (const btn_beregn of btns_beregn) {
    btn_beregn.onclick = visPrisberegner;
  }

  function visPrisberegner() {

    // Find den nærmeste .pakke (container)
    const pakke = this.closest(".pakke");

    // Find tekst-span inde i knappen
    const btn_beregn_tekst = this.querySelector("span.btn_tekst");

    // Toggler klassen 'aktiv' på knappen (styling/rotation)
    this.classList.toggle("aktiv");

  //toggler klassen aktiv, som åbner og lukker prisberegneren
    this.nextElementSibling.classList.toggle("aktiv");

    // Ændrer knaptekst
    if (btn_beregn_tekst.innerText === "Beregn din pris") {
      btn_beregn_tekst.innerText = "Luk prisberegner";
    } else {
      btn_beregn_tekst.innerText = "Beregn din pris";
    }
  }


//----------------------
/*const btns_beregn = document.querySelectorAll(".pakke .btn_beregn");
const pakke = btn_beregn.closest(".pakke");
const btn_beregn_tekst = btn_beregn.querySelector("span.btn_tekst");

for (const btn_beregn of btns_beregn) {
  btn_beregn.onclick = visPrisberegner;
}

/* //---åbne-/ lukke-funktion---
const btn_beregn = document.querySelector(".pakke button");


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
}*/


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
