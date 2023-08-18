//agregar un nuevo ewstudiante a la lista

const btnEstudiante = document.querySelector("#btnEstudiante");
const inputEstudiante = document.querySelector("btnEstudiante");

//btnEstudiante.addEventListener("click", () => {
    //console.log("has hecho click");
    //alert("pierdes la cabeza");
//});

function agregarEstudiante() {
if (inputEstudiante.Value.length === 0) {
 alert("favor de escribir");
 return;   
}    
if (typeof inputEstudiante.Value !== "string") {
    alert("solo letras")
}
const ul = document.querySelector("ul");
const li = document.createElemnt("li");
li.textContent = inputEstudiante.Value;
ul.appendChild(li);
}



