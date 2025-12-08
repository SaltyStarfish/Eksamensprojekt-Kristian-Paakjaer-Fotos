/*Henter inputfeltet for afstand*/
let input_afstand = document.getElementById("bryllup-pakke1-transportaftand");

/*Henter outputfeltet, hvor prisen skal stå*/
let output_pris = document.querySelector("#prisberegner-output");

/*Lytter efter hvornår afstanden i inputfeltet ændrer sig*/
input_afstand.onchange = beregn;

function beregn(){
/*Beregner prisen (skal stå inde i funktionen, for at den beregner ved hvert input - ellers virker det ikke)*/
  let pris = (input_afstand.valueAsNumber) * 2.5 + 6000;
 /*Bestemmer hvad der skal stå i outputfeltet*/ 
 output_pris.innerText = " " + pris + " kr.";
}
