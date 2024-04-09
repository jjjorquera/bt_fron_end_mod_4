const palabra = "sssa"

const esUnPalindromo = (palabra) => {
    const palindromo = palabra.toLowerCase(); // toLowerCase transforma todo a minuscula
    const inverso = palindromo.split('').reverse().join('');

    if(inverso === palindromo){
        return `La palabra ${palabra} si es un palindromo`
    } else {
       return `La palabra ${palabra} no es un palindromo`;
        
    }

}

console.log(esUnPalindromo(palabra))
