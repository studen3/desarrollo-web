// EJERCICIO EN CLASE

// si me puedes ayudar con esto: contar elementos pares e impares: escribe una función qué recibe un array de números y que cuente la cantidad de elementos pares e impares en el array. 

// ejemplo input: parimpar ([2, 4, 3, 5, 1])

// ejemplo output: 
// cantidad de números par: 2
// cantidad de números impares: 3


function ParImpar(array) {
    let pares = 0;
    let impares = 0;

    for (let index = 0; index < array.length; index++) {
         if (array[index] % 2 === 0) {
            pares++;
         } else {
            impares++;
         }
    }

    console.log("cantidad de numeros par: " + pares);
    console.log("cantidad de numeros impar: " + impares);
}