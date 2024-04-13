import alerta from "./alerta.js";
import ajustaTabela from "./ajustaTabela.js";

const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const ddd = document.getElementById("ddd");
const display = document.getElementById("displayCep");
const activeTd = document.querySelectorAll(".item");
const itemTh = document.querySelectorAll(".itemTh");

export default function exibeCep(element) {
  if (element.uf) {
    ajustaTabela(element, display, rua, bairro, cidade, ddd, activeTd, itemTh);
  } else {
    display.classList.remove('active')
    alerta("Cep não encontrado!");
  }
}
