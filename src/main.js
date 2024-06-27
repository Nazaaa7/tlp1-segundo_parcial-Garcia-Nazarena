
const express=require("express");

const bd=require("../src/bd/bd");

const app = express();

app.use(express.json());


//trae todos los productos 
app.get("/products", (req, res) => {
    res.json(bd);
});


//trae un producto dependiendo del id solicitado
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const getProducto = bd.find((producto) => producto.id == id);
    res.json(getProducto);
    
});


//Crea un nuevo producto
let idActual=1;
app.post("/products", (req, res) => {
    const id = idActual++; 
    const { name, quantity, price} = req.body;
    const priceFloat=parseFloat(price);
    const qauntityInt=parseInt(quantity);

    bd.push({id: id, name: name, quantity: quantity, price:price});

    res.json({mensaje: "datos ingresados con éxito", id, name, qauntityInt, priceFloat});

});

  //Editar un producto por su id
app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, quantity, price} = req.body;
    const priceFloat=parseFloat(price);
    const qauntityInt=parseInt(quantity);

    const getProducto = bd.find((producto) => producto.id == id);

    getProducto.name = name;
    getProducto.quantity = quantity;
    getProducto.price = price;
    console.log(getProducto);

    res.json({mensaje: "Producto actualizado", id, name, qauntityInt, priceFloat});

    
});

app.delete("/products/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const { name, quantity, price} = req.body;

    const getProducto = bd.find((producto) => producto.id == id);
  
    const producto = bd.indexOf(getProducto);
    const ptoEliminado = bd.splice(producto, 1);

    res.json({ message: "El producto eliminado es: ", ptoEliminado });

})





//puerto
app.listen(3000);
console.log("servidor corriendo");

