let opcion;

do {

    console.log("Menu de opciones")
    console.log("1. Mostrar producto")
    console.log("2. Agregar producto")
    console.log("3. Eliminar el producto")
    console.log("4. Actualizar el producto")
    console.log("5. Salir")

    opcion = Number(prompt("Introduce el numero de tu opcion"));

    switch(opcion) {
        case 1:{
            console.log("mostrando lista de productos...");
            // deberia ir la logica paramostrar productos
            break //el break cuando esta dentro del ciclo lo quebra y sale del ciclo

        }
        case 2: {
            console.log("agregar un producto...");
            break
        }
        case 3:{
            console.log("eliminar producto...")
            break
        }
        case 4: {
            console.log("actualizar el producto")
            break
        } 
        case 5: {
            console.log("saliendo....")
            break
        }
        default:
            alert("Opcion no valida, por favor introduce un numero entre 1 y 5")
        
    }

    // if (opcion === 10) {
    //     break
    // }
} while(opcion != "5")