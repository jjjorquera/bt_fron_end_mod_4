const carrito = [
    {nombreProducto: 'iPhone 15 Pro Max', precio: 1700000},
    {nombreProducto: 'Notebook Gamer HP Omen 16', precio: 1800000},
    {nombreProducto: 'Taclado gamer razer', precio: 80000},
    {nombreProducto: 'Monitor Gamer MSI', precio: 480000}
]

//* Cual es la utilidad de aplicar el map en esta situacion

const resultadoCarrito = carrito.map(producto => {
    return `El producto: ${producto.nombreProducto}, tiene un precion de ${Intl.NumberFormat().format(producto.precio)}`
})

console.log(resultadoCarrito);