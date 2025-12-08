const spoergsmaal = document.getElementsByClassName("spoergsmaal");

for (let i = 0; i < spoergsmaal.length; i++) {
    spoergsmaal[i].addEventListener("click", function() {

    this.classList.toggle("active");
});
}
