//* El metodo "reduce es un metodo de array" que se comporta como un acumulador, es decir toma una cantidad de datos y nos retorna el resultado acumuladp

const carrito = [
    {nombreProducto: 'iPhone 15 Pro Max', precio: 1700000},
    {nombreProducto: 'Notebook Gamer HP Omen 16', precio: 1800000},
    {nombreProducto: 'Taclado gamer razer', precio: 80000},
    {nombreProducto: 'Monitor Gamer MSI', precio: 480000},
    {nombreProducto: 'Monitor Gamer MSI', precio: 480000}
]


//* El resultado acumulado lo vamos a guardar en "totalDeVenta"

const totalDeVenta = carrito.reduce((total, producto) => {
    return total + producto.precio
}, 0);

console.log(Intl.NumberFormat().format(totalDeVenta));


// Array = []
//* metodoArray -> map
//* metodoArray -> reduce
//* () => {} "callback" es una funcion quese pasa por parametro a otra funcion
Array.metodoArray((elemento) => {

})

