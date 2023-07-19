//usamos "getElementById" para obtener el div del documento principal
const div = document.querySelector("#app");

//creamos eltitulo con "createElement"
const titulo = document.createElement("h1");
//le damos una clase al elemento con "classList"
titulo.classList.add("titulo");
// asignamos contenido de texto con la pripieda "textContent"
titulo.textContent = "Los Gatos";
//vamos a gregarle al titulo un evento usando addEventListener para el tipo de evento y una funcion anonima que se ejecutara en alert o puede ser en consola
titulo.addEventListener("click", () => {
//console.log("has hecho click");
alert("Has hecho clic en el título");
});
//le agregamos sazon al titulo:)
titulo.style.color = "blue"
//al titulo le agregamos un evento para cuando se pase el maous cambie de color
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "black";
});
//agregamos los elementos creados al documento
div.appendChild(titulo);
//creamos y agregamos un bonton al domento
const cambiarTituloBtn = document.createElement("button");
cambiarTituloBtn.textContent = "Cambiar-Título";
div.appendChild(cambiarTituloBtn);
//llamamos a nuestro boton y le damos una funcion 
cambiarTituloBtn.addEventListener("click", () => {
  titulo.textContent = "miau miaouuu";
});

//con los pasos anteriores cearemos el parrafo de la descripcion
const descripcion = document.createElement("p");
descripcion.classList.add("descripcion");
descripcion.textContent =
  "Los gatos son animales domésticos que se caracterizan por su elegancia,agilidad y carácter independiente. Son mascotas muy populares en todo el mundo."
div.appendChild(descripcion);

//creamos la imagen
const imagen = document.createElement("img");
imagen.classList.add("imagen-cat");
//y la terminamos con los siguientes atributos "src" y "alt"
imagen.src = "https://http.cat/images/200.jpg";
imagen.alt = "Cat";
div.appendChild(imagen);

//creamos el subtitulo "h2" asi como creamos el titulo
const subtitulo = document.createElement("h2");
subtitulo.classList.add("subtutilo");
subtitulo.textContent = "Raza de Gatos";
div.appendChild(subtitulo);

//creamos una lista de razas "ul"
const razasLista = document.createElement("ul");
razasLista.classList.add("Razas-de-Gatos");
div.appendChild(razasLista);

//creamos los elemetos que vamos agregar a la lista
const razas = ["Persa", "Siames", "Maine Coon", "Bengali"];
razas.forEach((raza) => {
  const catLista = document.createElement("li");
  catLista.classList.add("raza-gato");
  catLista.textContent = raza;
  razasLista.appendChild(catLista);
});


