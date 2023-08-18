const d = document;

export function calculadora() {
  const pantalla = d.querySelector(".pantalla");
  const botones = d.querySelectorAll(".btn-calculadora");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const valu = boton.textContent;
      if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
      }

      if (boton.id === "borrar") {
        if (pantalla.textContent.length === "") {
          pantalla.textContent = "0";
        } else {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
      }

      if (boton.id === "igual") {
        try {
          pantalla.textContent = eval(pantalla.textContent);
        } catch (error) {
          pantalla.textContent = "ERROR!!";
        }
        return;
      }

      if (pantalla.textContent === "0") {
        pantalla.textContent = valu;
      } else {
        pantalla.textContent = "0;";
        return;
      }

      if (pantalla.textContent === "0") {
        pantalla.textContent = valu;
      } else {
        pantalla.textContent += valu;
      }
    });
  });
}
