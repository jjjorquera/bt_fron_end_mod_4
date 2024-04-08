// Vamos a ingresar por pantalla una cantidad de dias, a cuantos años equivale, cuantas semanas y dias

let dias = parseInt(prompt("Ingresa numero de dias"));


let año = 365;
let semana = 7;

let restante = dias % año;


console.log(restante);