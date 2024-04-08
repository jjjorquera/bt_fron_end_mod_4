const numeros = [33, 40, 54, 67, 31, 27, 11, 20];

const resultado = numeros.map(elemento => {
    return elemento*2;
})

// console.log(resultado);

// del arrelgo multiplicar por 2 todos los divisibles por 2

const resultado2 = numeros.map(elemento => {
    if (elemento%2 == 0) {
        return elemento *2
    } else return elemento;
})

// console.log(resultado2)


// del arrelgo multiplicar por 5 todos los divisibles por 3

const resultado3 = numeros.map(elemento => {
    if (elemento%3 == 0) {
        return elemento *5
    } 
    return elemento;
})

console.log(resultado3)

// del arreglo

const nombres = ["sofia", "catalina", "richard", "Juan"];

// const nombreTexto = nombres.map(elemento => {
//     // return elemento + " Ing software"
//     return `${elemento} - ing de software`
// })

const nombreTexto = nombres.map(elemento =>`${elemento} - ing de software`) //mismo codigo mas simplificado que el de arriba.

console.log(nombreTexto);



//* del arreglo solo obtener la edad

const persona = [{nombre: 'Sofia', edad: 27}, {nombre: 'Catalina', edad: 25}]

//* Necesitamos pasar el arreglo por el map y obtener las edades

const nuevoArrayEdades = persona.map( elemento => {
    return elemento.edad;
})

console.log(nuevoArrayEdades);


