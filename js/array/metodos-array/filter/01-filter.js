

const carrito = [
    {nombreProducto: 'iPhone 15 Pro Max', precio: 1700000},
    {nombreProducto: 'Notebook Gamer HP Omen 16', precio: 1800000},
    {nombreProducto: 'Taclado gamer razer', precio: 80000},
    {nombreProducto: 'Monitor Gamer MSI', precio: 480000},
]


//* filter un nuevo metodo de array
const resultadoFilter = carrito.filter((producto) => {
    return producto.precio > 1000000
})



const resultadoFilterNombreProducto = carrito.filter((producto) => {
    return producto.nombreProducto != 'Monitor Gamer MSI';
})


console.log(resultadoFilterNombreProducto);

// console.log(resultadoFilter);

