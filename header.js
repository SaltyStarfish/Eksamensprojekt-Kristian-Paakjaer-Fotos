const burger = document.querySelector("button#burger");
const burger_menu = document.querySelector("nav>menu");

burger.onclick = visBurgerMenu;
burger.onclick = visBurgerMenu;

function visBurgerMenu() {
  burger_menu.style = "display: block";
}

function skjulMenu(){
  burger_menu.style = "display: none";
}

