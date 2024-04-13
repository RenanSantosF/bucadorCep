export default function ajustaTabela(
  element,
  display,
  rua,
  bairro,
  cidade,
  ddd,
  activeTd,
  itemTh
) {
  if (window.innerWidth > 800) {
    display.classList.add("active");
    rua.innerHTML = element.logradouro;
    bairro.innerHTML = element.bairro;
    cidade.innerHTML = `${element.localidade}/${element.uf}`;
    ddd.innerHTML = element.ddd;
  } else {
    activeTd.forEach((item) => {
      display.classList.add("active");
      item.classList.add("activeTd");
    });
    itemTh.forEach((item) => {
      item.classList.add("disableTh");
    });

    rua.innerHTML = `<span class="spanMobile">Logradouro/Nome</span><span>${element.logradouro}</span>`;
    bairro.innerHTML = `<span class="spanMobile">Bairro/Distrito</span><span>${element.bairro}</span>`;
    cidade.innerHTML = `<span class="spanMobile">Localidade/UF</span><span>${element.localidade}/${element.uf}</span>`;
    ddd.innerHTML = `<span class="spanMobile">DDD</span><span>${element.ddd}</span>`;
  }
}
