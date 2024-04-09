let producto = "notebook";

switch(producto) {
    case 'celular':
        console.log("es un celular..");
        break;
    case 'mouse':
        console.log("es un teclado..");
        break;
    case "teclado":
        console.log("es un teclado..");
        break
    default:
        console.log(`Lo sentimos no tenemos el producto: ${producto}`);
}