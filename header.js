const burger = document.querySelector("header #btn_burger");
let responsive_topnav = document.querySelector("header .responsive-topnav");

burger.onclick = toggleBurgerMenu; 

function toggleBurgerMenu() {
   responsive_topnav.classList.toggle("aktiv");
}

