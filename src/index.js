import manipulaCep from "./manipulaCep.js"

const input = document.getElementById("input");
const btnBuscar = document.getElementById("btnBuscar");
const spanAlert = document.getElementById("alert");

btnBuscar.addEventListener("click", () => {
  manipulaCep(input, spanAlert);
});


