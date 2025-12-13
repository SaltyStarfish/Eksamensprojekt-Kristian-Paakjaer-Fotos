// Finder burger-ikonet
const burger = document.querySelector("header #btn_burger");

// Finder navigationsmenuen
const responsive_topnav = document.querySelector("header .responsive-topnav");

// Lytter efter onclick og kører funktion
burger.onclick = toggleBurgerMenu; 

//"toggle"-funktion: Tilføjer eller fjerner en class'en "aktiv", som er stylet anderledes i css, og afgør, om menuen vises eller ej, og om de hvide streger former en burger eller et kryds
function toggleBurgerMenu() {
   responsive_topnav.classList.toggle("aktiv");
}

