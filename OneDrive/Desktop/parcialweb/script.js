/* Lista de productos del carrito */
let carrito = [];

/* Agregar productos al carrito */
function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    alert(nombre + " agregado al carrito correctamente.");
}

/* Actualizar el contador */
function actualizarCarrito() {

    document.getElementById("contador").textContent = carrito.length;

}

/* Mostrar los productos del carrito */
function mostrarCarrito() {

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "TU CARRITO DE COMPRAS\n\n";
    let total = 0;

    carrito.forEach((producto, indice) => {

        mensaje += (indice + 1) + ". " +
        producto.nombre + " - $" +
        producto.precio.toFixed(2) + "\n";

        total += producto.precio;

    });

    mensaje += "\nTOTAL: $" + total.toFixed(2);

    alert(mensaje);

}