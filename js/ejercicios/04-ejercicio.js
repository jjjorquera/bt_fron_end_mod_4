// Vamos a preguntaar la fecha de nacimiento y base a ella calcularemos la edad

let fechaDeNaciemieto = prompt("Ingrese la fecha de nacimiento (aaaa - mm - dd)");

let fechaDeNaciemietoDate = new Date(fechaDeNaciemieto);

// Obtener la fecha actual

let fechaActual = new Date();

// Calculamos la edad
// fechaActual.getFullYear() solo obtengo el año

let edad = fechaActual.getFullYear() - fechaDeNaciemietoDate.getFullYear();

if (edad >= 18) {
    alert("puedes ver la pelicula")

} else {
    alert("no puedes ver la pelicula");
}



