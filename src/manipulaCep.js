import exibeCep from "./exibeCep.js";
import alerta from "./alerta.js";

export default function manipulaCep(input, spanAlert) {
  if (input.value.length < 2) {
    alerta("Informe o Endereço com no mínimo 2(dois) caracteres!");
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
      throw new Error("Erro ao fazer a solicitação");
    }

    const data = await response.json();

    exibeCep(data, spanAlert);
  } catch (error) {
    alerta("Cep não encontrado!");
  }
}

function removeCaracteresIndesejados(element) {
  return element.replace(/\D/g, "");
}
