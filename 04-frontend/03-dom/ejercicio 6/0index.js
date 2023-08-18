import { menu } from "./js/menu-hamburguesa.js";
import { reloj } from "./js/reloj-digital.js";
import { calculadora } from "./js/calculadora.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu();
  reloj();
  calculadora();
});



