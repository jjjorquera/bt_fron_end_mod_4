//* El metodo map(), crea in nuevo array, el array resultante tiene una modificacion por aca elemento.

const numeros = [1, 2, 3, 4, 5];

let nuevoArray = numeros.map(function(elemento, indices, array) {
    return elemento * 2;
})

let nuevoArray2 = numeros.map(elemento => {
    return elemento*5;
})

console.log(nuevoArray2);