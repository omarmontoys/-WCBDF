const Ventas = require("../models/ventas.model");

//GET- Todas los Ventass
exports.getAllVentas = async (req, res) => {
	try {
		const ventas = await Ventas.findAll();
		res.status(200).json({
			estado: 1,
			mensaje: "Ventas encontradas",
			Ventass: ventas,
		});
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//GET- Un Ventas por id
exports.getVentasId = async (req, res) => {
	const { id } = req.params;
	try {
		const ventas = await Ventas.findByPk(id);
		if (ventas === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Ventas no encontradas",
			});
		} else {
			res.status(200).json({
				estado: 1,
				mensaje: "Ventas encontradas",
				Ventas: Ventas,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//POST Crear un Ventas
exports.createVentas = async (req, res) => {
	const { id_factura, id_producto, cantidad } = req.body;
	try {
		if (
			id_factura == undefined ||
			id_producto == undefined ||
			cantidad == undefined
		) {
			res.status(400).json({
				estado: 0,
				mensaje: "BAD REQUEST",
			});
		} else {
			const Venta = await Ventas.create({
				id_factura: id_factura,
				id_productos: id_producto,
				cantidad: cantidad,
			});
			res.status(200).json({
				estado: 1,
				mensaje: "Venta creada correctamente",
				Ventas: Venta,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//PUT Actualizar Ventas
exports.updateVentas = async (req, res) => {};
//DELETEEliminar un Ventas
exports.deleteVentas = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteVenta = await Ventas.findByPk(id);
		if (deleteVenta === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Venta no encontrada",
			});
		} else {
			await deleteVenta.destroy();
			res.status(200).json({
				estado: 1,
				mensaje: "Venta Eliminada",
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
