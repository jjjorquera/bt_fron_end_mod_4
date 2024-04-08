let num1 = 10;

let num2 = 10;

const sumar = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;

const multiplicar = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

console.log(`La suma de ${num1} y ${num2} es ${sumar(num1, num2)}`);

console.log(`La resta de ${num1} y ${num2} es ${resta(num1, num2)}`);

console.log(`La multiplicar de ${num1} y ${num2} es ${multiplicar(num1, num2)}`);

console.log(`La division de ${num1} y ${num2} es ${division(num1, num2)}`);





// function sumar(x, y) {
//     return x + y;
//   }
//   function restar(x, y) {
//     return x - y;
//   }2
//   function dividir(x, y) {
//     return x / y;
//   }
//   function multiplicar(x, y) {
//     return x * y;
//   }
//   let resultado = 0;
//   const operacion=prompt("Que operacion quieres realizar? 1.Sumar 2.Restar 3.Dividir 4.Multiplicar. Ingresa el numero de la operacion")
//   const num1=parseFloat(prompt("Indica el primer numero"))
//   const num2=parseFloat(prompt("Indica el segundo numero"))
//   switch (operacion) {
//     case "1":
//       alert(`el resultado de sumar ${num1} y ${num2} es ${sumar(num1, num2)} `);
//       break;
//     case "2":
//       alert(`el resultado de restar ${num1} y ${num2} es ${restar(num1, num2)} `);
//       break;
//     case "3":
//       alert(
//         `el resultado de dividir ${num1} y ${num2} es ${dividir(num1, num2)} `
//       );
//       break;
//     case "4":
//       alert(
//         `el resultado de multiplicar ${num1} y ${num2} es ${multiplicar(
//           num1,
//           num2
//         )} `
//       );
//       break;
//     default:
//       alert("Operacion invalida.");
//   }