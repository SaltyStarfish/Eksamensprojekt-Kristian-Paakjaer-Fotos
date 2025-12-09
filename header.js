const burger = document.querySelector("#btn_burger");
let responsive_topnav = document.querySelector(".responsive-topnav");

burger.onclick = toggleBurgerMenu; 

function toggleBurgerMenu() {
   responsive_topnav.classList.toggle("aktiv");
}

