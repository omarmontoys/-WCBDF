const express = require("express"); // Crear servidores HTTP como Apache, IIS, etc.
const app = express(); //
const port = 3000; // Se escucha en el puerto 3000
app.get("/", (req, res) => {
	// Variables de solicitudes y respuesta
	//Mensaje para el cliente (Usuario)
	res.send("Adios vaquero (Apache ) por GET - Obtener"); // Enviamos Hola Mundo
});
app.post("/", (req, res) => {
	// Variables de solicitudes y respuesta
	//Mensaje para el cliente (Usuario)
	res.send("Adios vaquero (Apache ) por POST - Crear"); // Enviamos Hola Mundo
});
app.put("/", (req, res) => {
	// Variables de solicitudes y respuesta
	//Mensaje para el cliente (Usuario)
	res.send("Adios vaquero (Apache ) por PUT - Actualizar"); // Enviamos Hola Mundo
});
app.delete("/", (req, res) => {
	// Variables de solicitudes y respuesta
	//Mensaje para el cliente (Usuario)
	res.send("Adios vaquero (Apache ) por DELETE - Eliminar"); // Enviamos Hola Mundo
});
//Clientes: Edge, Insomnia, Chrome, FireFox
app.listen(port, () => {
	//Mensaje para el desarrollador

	//Diferentes maneras de mandar el mensaje
	//console.log("Servidor corriendo en el puerto: ", port); //
	console.log(`Servidor corriendo en el puerto: ${port}`);
});
