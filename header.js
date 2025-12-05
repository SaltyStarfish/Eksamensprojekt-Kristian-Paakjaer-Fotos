const burger = document.querySelector("#burger");
const burger_menu = document.querySelector("nav>menu");

burger.onclick = visBurgerMenu;

function visBurgerMenu() {
  //https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
  if (burger_menu.style.display === "none") {
    burger_menu.style.display = "block";

  } 
  else {
    burger_menu.style.display = "none";
  }
}


onclick="myFunction(this)"