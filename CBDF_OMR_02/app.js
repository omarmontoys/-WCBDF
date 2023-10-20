/*
Tabla - Productos - Coleccion 
id
nombre
categoria
precio
existencia
*/

const express = require("express");
const app = express();
const port = 3001;
//GET - Listar todos los productos
app.get("/socios/v1/productos", (req, res) => {
	res.send("Aqui van todos los productos {JSON}");
});
//GET - Mostrar productos por su ID
app.get("/socios/v1/productos/:id", (req, res) => {
	//El id viene los params de la solicitud
	res.send("Aqui los datos del producto por su id {JSON}");
});
//POST - Agregar un nuevo producto
app.post("/socios/v1/productos", (req, res) => {
	//El producto viene en el body de la solicitud
	res.send("Producto agregado correctamente {JSON}");
});
//PUT -Actualizar un producto por su id
app.put("/socios/v1/productos/:id", (req, res) => {
	//El id viene en los params de la solicitud
	//Los datos del producto vienen en el body de la solicitud
	res.send("Producto actualizado correctamente {JSON}");
});
//DELETE - Eliminar producto por si id
app.delete("/socios/v1/productos/:id", (req, res) => {
	//El id viene en los params de la solicitud
	res.send("Producto eliminado correctamente {JSON}");
});

//Poner en marcha nuestra api

app.listen(port, () => {
	console.log("Servidor corriendo en el puerto: ", port);
});
