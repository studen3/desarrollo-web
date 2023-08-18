const d = document;

export function reloj() {
  let relojTiempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-activar-reloj")) {
      relojTiempo = setInterval(() => {
        let relojHr = new Date().toLocaleString();
        d.querySelector("#reloj").innerHTML = "<h3>" + relojHr + "</h3>" 
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches("#btn-desactivar-reloj")) {
      clearInterval(relojTiempo);
      d.querySelector("#btn-activar-reloj").disabled = false;
      d.querySelector("#reloj").innerHTML = null;
    }
  });
}
