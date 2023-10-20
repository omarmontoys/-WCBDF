const Producto = require("../models/productos.model");

//GET- Todas los Productos
exports.getAllProducto = async (req, res) => {
	try {
		const Productos = await Producto.findAll();
		res.status(200).json({
			estado: 1,
			mensaje: "Productos encontrados",
			Productos: Productos,
		});
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//GET- Un Producto por id
exports.getProductoId = async (req, res) => {
	const { id } = req.params;
	try {
		const Productos = await Producto.findByPk(id);
		if (Productos === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Producto no encontrad0",
			});
		} else {
			res.status(200).json({
				estado: 1,
				mensaje: "Producto encontrado",
				Producto: Productos,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//POST Crear un Producto
exports.createProducto = async (req, res) => {
	const { descripcion, precio, id_categoria, id_proveedor } = req.body;
	try {
		if (
			descripcion == undefined ||
			precio == undefined ||
			id_categoria == undefined ||
			id_proveedor == undefined
		) {
			res.status(400).json({
				estado: 0,
				mensaje: "BAD REQUEST",
			});
		} else {
			const producto = await Producto.create({
				descripcion: descripcion,
				precio: precio,
				id_categoria: id_categoria,
				id_proveedor: id_proveedor,
			});
			res.status(200).json({
				estado: 1,
				mensaje: "Producto creado correctamente",
				Producto: producto,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//PUT Actualizar Producto
exports.updateProducto = async (req, res) => {};
//DELETEEliminar un Producto
exports.deleteProducto = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteProducto = await Producto.findByPk(id);
		if (deleteProducto === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Producto no encontrado",
			});
		} else {
			await deleteProducto.destroy();
			res.status(200).json({
				estado: 1,
				mensaje: "Producto Eliminado",
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
