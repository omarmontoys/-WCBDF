const Factura = require("../models/facturas.model");

//GET- Todas los facturas
exports.getAllFactura = async (req, res) => {
	try {
		const facturas = await Factura.findAll();
		res.status(200).json({
			estado: 1,
			mensaje: "Facturas encontrados",
			facturas: facturas,
		});
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//GET- Un Factura por id
exports.getFacturaId = async (req, res) => {
	const { id } = req.params;
	try {
		const Factura = await Factura.findByPk(id);
		if (Factura === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Factura no encontrad0",
			});
		} else {
			res.status(200).json({
				estado: 1,
				mensaje: "Factura encontrado",
				Factura: Factura,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//POST Crear un Factura
exports.createFactura = async (req, res) => {
	const { fecha, id_cliente } = req.body;
	try {
		if (fecha == undefined || id_cliente == undefined) {
			res.status(400).json({
				estado: 0,
				mensaje: "BAD REQUEST",
			});
		} else {
			const factura = await Factura.create({
				fecha: fecha,
				id_Cliente: id_cliente,
			});
			res.status(200).json({
				estado: 1,
				mensaje: "Factura creado correctamente",
				Factura: factura,
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
//PUT Actualizar Factura
exports.updateFactura = async (req, res) => {};
//DELETEEliminar un Factura
exports.deleteFactura = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteFactura = await Factura.findByPk(id);
		if (deleteFactura === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Factura no encontrado",
			});
		} else {
			await deleteFactura.destroy();
			res.status(200).json({
				estado: 1,
				mensaje: "Factura Eliminada",
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
