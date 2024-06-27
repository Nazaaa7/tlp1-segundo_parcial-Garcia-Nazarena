const bd = {
    id: 1,
    name: "Arroz",
    quantity: 21,
    price: 22.2
}



module.exports = bd;


// Desarrolla un servidor Express que permita gestionar un inventario de productos. Implementa las siguientes rutas:
// GET /products: Devuelve la lista completa de productos.
// GET /products/:id Devuelve un único producto según el id recibido por parámetro (params).
// POST /products: Permite agregar un nuevo producto. El producto debe tener un id único, un nombre, una cantidad y un precio.
// PUT /products/:id: Permite actualizar el nombre, la cantidad y el precio de un producto existente.
// DELETE /products/:id: Permite eliminar un producto por su id.

// id: Número entero (generado automáticamente)
// name: Cadena de texto (obligatorio)
// quantity: Número entero (obligatorio)
// price: Número decimal (obligatorio)