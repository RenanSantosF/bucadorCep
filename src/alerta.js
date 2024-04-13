export default function alerta(text) {
  document.getElementById("alert").textContent = text;

  setTimeout(() => {
    document.getElementById("alert").classList.add("mostrar");

    setTimeout(() => {
      document.getElementById("alert").classList.remove("mostrar");
    }, 3 * 1000);
  }, 100);
}
