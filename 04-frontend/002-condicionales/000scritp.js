// solicitar el peso del usuario
let peso = parseFloat(prompt("por favor, ingresa tu peso en kilogramos:"));

// solicitar la altura al usuario
let altura = parseFloat(prompt("por favor, ingresa tu altura en metros:"));

// calcular IMC
let imc = peso / (altura * altura);

// redomdeamos el IMC a 2 decisales
imc = imc.toFixed(2);

// comprobamos la categoria de IMC para mostrar el mensaje adecuado
let mensaje = "tu indice de masa corporal (IMC) es: " + imc + ". ";

if (imc < 18.5) {
  mensaje += "tienes bajo peso.";
} else if (imc >= 18.5 && imc < 25) {
  mensaje += " tienes un peso normal.";
} else if (imc >= 25 && imc < 30) {
  mensaje += "tienes sobrepeso.";
} else {
  mensaje += "tienes obecidad.";
}

// mostramos el mensaje final
alert(mensaje);
