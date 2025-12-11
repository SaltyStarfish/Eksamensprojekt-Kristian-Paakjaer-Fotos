/*Kontekst: Knappen i formularen, skal ikke være en submit-knap, men skal i stedet åbne en "popover", fordi vi gerne vil give brugeren mulighed for at gennemse beskeden og gå tilbage, hvis man vil ændre noget, eller submitte, hvis alt er i orden.
Men det betyder også at browseren ikke validerer input'ene, når man trykker på den første send-knap, fordi det ikke er en submit-knap. Derfor må vi selv indsætte en lignende funktion med JavaScript:
(Reference: https://www.youtube.com/watch?v=In0nB0ABaUk)
*/

//https://copilot.microsoft.com/shares/Jb5sv9yipanKWTPHdT3Xt
  const form = document.getElementById('kontakt-formular');
  const validator = document.getElementById('btn_validator');

  validator.addEventListener('click', (event) => {
    // Aktiverer browserens default-validation
    if (!form.reportValidity()) {
      // Forhindre popover'en i at åbne hvis inputer er invalid (! betyder "not" som i not valid (værdien false))
      event.preventDefault();
    }
  });
// Hvis alt er valid, åbner popoveren selv pga. popover-attribute i html

//Næste step: indsaml input-data og indsæt det i popover'en
let input_navn = document.getElementById("form-input_navn");
let input_email = document.getElementById("form-input_email");
let input_telefon = document.getElementById("form-input_telefon");
let input_besked = document.getElementById("form-input_besked");

const output_navn = document.getElementById("review-navn");
const output_email = document.getElementById("review-email");
const output_telefon = document.getElementById("review-telefon");
const output_besked = document.getElementById("review-besked");

//Get input-value https://www.w3schools.com/jsref/prop_text_value.asp 
validator.onclick = function() {
   output_navn.innerText = '"' + input_navn.value + '"';
   output_email.innerText = '"' + input_email.value + '"';
   output_telefon.innerText = '"' + input_telefon.value + '"';
   output_besked.innerText = '"' + input_besked.value + '"';
}



//sidste step: alert, når beskeden er sendt og luk popover
const popover = document.getElementById("div_bekraeft-besked")

form.onsubmit = function(event) {
   event.preventDefault();
   popover.innerHTML = '<h3>Din besked er sendt.</h3> <br> <p>Tak for din henvendelse! <br>Jeg vender tilbage hurtigst muligt. <br> - Kristian <button class="close_button" popovertarget="div_bekraeft-besked" popovertargetaction="hide"type="button" name="Luk"> Luk </button>';
   form.reset();
   popover.showPopover()
};
