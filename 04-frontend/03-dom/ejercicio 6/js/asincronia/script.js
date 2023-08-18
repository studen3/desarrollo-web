// function llegar() {
//   console.log("Llegar");
// }

// function esperar(callback) {
//   setTimeout(() => {
//     console.log("Esperar");
//     callback();
//   }, 2000);
// }

// function irse() {
//   console.log("Irse");
// }

// llegar();
// esperar(irse);

/* PROMESAS

Una promesa es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.

El promise tiene tres estados:
1. Pending: estado inicial, no cumplida o rechazada.
2. Resolved: significa que la operación se completó.
3. Rejected: significa que la operación falló.
*/

//ejercicio 1

// let teHasPortadoBien = true;

// const siMePortoBien = new Promise((resolve, reject) => {
//   if (teHasPortadoBien) {
//     const telefono = {
//       marca: "Iphone",
//       modelo: "14 Pro Max",
//       espacio: "512 GB",
//       color: "Gris espacial",
//     };
//     resolve(telefono);
//   } else {
//     reject("Te has portado mal 😢");
//   }
// });

// siMePortoBien
//   .then((telefono) => {
//     console.log("Te portaste bien, recibiste un " + telefono.marca);
//   })
//   .then(() => {
//     console.log("Grabar un video con el iPhone");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let hayUnaPersona = true;

// function hola(nombre) {
//   return new Promise((resolve, reject) => {
//     if (hayUnaPersona) {
//       setTimeout(() => {
//         console.log("Hola");
//         resolve(nombre);
//       }, 2000);
//     } else {
//       reject("No se pudo saludar");
//     }
//   });
// }

// function hablar() {
//   console.log("Bla bla bla bla...");
// }

// hola("Angelo")
//   .then((nombre) => {
//     console.log("Hola " + nombre);
//   })
//   .then(hablar)
//   .then(hablar)
//   .then(hablar)
//   .then(() => {
//     console.log("Adios");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function hacerAlgo(callback) {
//   setTimeout(function () {
//     callback("¡Operación completada!");
//   }, 2000);
// }

// function callbackFuncion(mensaje) {
//   console.log("hla");
// }

// hacerAlgo(callbackFuncion);

/* */
const url = "https://jsonplaceholder.typicode.com/comments/1";
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    
  })
  .catch((error) => {
    console.log("tu error es" + error);
  });
