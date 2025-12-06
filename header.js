const burger = document.querySelector("#btn_burger");
let responsive_topnav = document.querySelector(".responsive-topnav");

burger.onclick = toggleBurgerMenu; 

function toggleBurgerMenu() {
  if (responsive_topnav.className === "responsive-topnav") {
    responsive_topnav.className += " vertical-menu";
  } else {
    responsive_topnav.className = "responsive-topnav";
  }
}

