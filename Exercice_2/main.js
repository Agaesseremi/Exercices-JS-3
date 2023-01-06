let afficher = document.getElementById("B");
let masquer = document.getElementById("C");
let text = document.getElementById("text");

masquer.addEventListener("click", () => {
  text.style.display = "none";
})
afficher.addEventListener("click", () => {
  text.style.display = "block";
})