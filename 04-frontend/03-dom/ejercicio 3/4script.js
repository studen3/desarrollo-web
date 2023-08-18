;let ventana;

const btnabrir = document.querySelector("#abrir-ventana");

btnabrir.addEventListener("click", function () {
  ventana = open("https://www.youtube.com/");
});

const btncerrar = document.querySelector("#cerrar-ventana");

btncerrar.addEventListener("click", () => {
  ventana.close();
});

const btnimprimir = document.querySelector("#imprimir-ventana");

btnimprimir.addEventListener("click", () => {
  print("imprimiste una ventana");
});

console.log(navigator);

console.log(location)
