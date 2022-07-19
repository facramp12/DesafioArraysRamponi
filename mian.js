const carrito = [ ];

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
}

agregarAlCarrito({id: 0001, name: "gorrita", price: 900})
agregarAlCarrito({id: 0002, name: "remerita", price: 700})
agregarAlCarrito({id: 0003, name: "shortcitos", price: 600})
agregarAlCarrito({id: 0004, name: "zapatillitas", price: 400})
agregarAlCarrito({id: 0005, name: "mediecitas", price: 40})

function borrarProductoDelCarrito(idDelProducto){
    const index = carrito.findIndex((producto) => producto.id === idDelProducto);

    if(index !== -1) {
        carrito.splice(index, 1);
    }

    carrito.splice(index, 1);
    console.log(carrito);
}

borrarProductoDelCarrito(0002);
borrarProductoDelCarrito(0005);
