function calcularIMC() {
  //selecionamos los inputs del html
  const peso = parseFloat(document.getElementById("pesoInput").value);
  const altura = parseFloat(document.getElementById("alturaInput").value);

  // verificar que los campos no estén vacíos y sean números válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    // si el usuario no a agregado nada mostrar alert
    alert("Por favor, ingresa valores válidos para peso y altura.");
    return;
  }

  let imc = peso / (altura * altura);
  imc = imc.toFixed(2);

  let mensaje = "Tu índice de masa corporal (IMC) es: " + imc + ". ";

  if (imc < 18.5) {
    mensaje += "Tienes bajo peso.";
  } else if (imc >= 18.5 && imc < 25) {
    mensaje += "Tienes un peso normal.";
  } else if (imc >= 25 && imc < 30) {
    mensaje += "Tienes sobrepeso.";
  } else {
    mensaje += "Tienes obesidad.";
  }

  const resultadoContainer = document.getElementById("resultado");
  resultadoContainer.innerHTML = mensaje;
}

const btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcularIMC);
inputPeso.value = "";
inputAltura. value = "";