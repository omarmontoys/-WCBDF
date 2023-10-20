const express = require("express");
const routsCategory = require("./src/routes/categorias.route.js");
const routsClients = require("./src/routes/clientes.route");
const routsFacture = require("./src/routes/facturas.route");
const routsProductos = require("./src/routes/productos.route");
const routsProveedores = require("./src/routes/proveedores.route");
const routsVentas = require("./src/routes/ventas.route");
const app = express();
const port = process.env.PORT || 3000;

//Configuracion del servidor
app.use(express.json());
app.use("/socios/v2/categorias", routsCategory);
app.use("/socios/v2/clientes", routsClients);
app.use("/socios/v2/facturas", routsFacture);
app.use("/socios/v2/productos", routsProductos);
app.use("/socios/v2/proveedores", routsProveedores);
app.use("/socios/v2/Ventas", routsVentas);

//Ejecutar servidor
app.listen(port, () => {
	console.log("Servidor escuchando en el puerto", port);
});
