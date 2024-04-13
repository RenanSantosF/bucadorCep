import exibeCep from "./exibeCep.js";
import alerta from "./alerta.js";
const display = document.getElementById("displayCep");

export default function manipulaCep(input, spanAlert) {
  if (input.value.length < 2) {
    alerta("Informe o Endereço com no mínimo 2(dois) caracteres!");
    display.classList.remove('active')
  } else {
    let cep = removeCaracteresIndesejados(input.value);
    api(cep, spanAlert);
  }
}

async function api(element, spanAlert) {
  let apiServer = "https://viacep.com.br/ws/" + element + "/json/";

  try {
    const response = await fetch(apiServer);

    if (!response.ok) {
      alerta("Cep não encontrado!");
      display.classList.remove('active')
      throw new Error("Erro ao fazer a solicitação");
    }

    const data = await response.json();

    exibeCep(data, spanAlert);
  } catch (error) {
    display.classList.remove('active')
    alerta("Cep não encontrado!");
  }
}

function removeCaracteresIndesejados(element) {
  return element.replace(/\D/g, "");
}
