function obtenerDiaPorNumero(numero) {
    //*Espero que 1 sea el lunes
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    //* los indices de un arreglo comienzan en 0

    return dias[numero - 1];
}

//* Invocamos a la funcion
const resultado= obtenerDiaPorNumero(1); //* espero recibir el lunes
console.log(resultado); //* imprime el dia lunes