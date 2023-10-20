const Proveedor = require("../models/proveedores.model");

//GET- Todas los Proveedors
exports.getAllProveedor = async (req, res) => {
	try {
		const proveedors = await Proveedor.findAll();
		res.status(200).json({
			estado: 1,
			mensaje: "Provedores encontrados",
			Proveedors: proveedors,
		});
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//GET- Un Proveedor por id
exports.getProveedorId = async (req, res) => {
	const { id } = req.params;
	try {
		const proveedor = await Proveedor.findByPk(id);
		if (proveedor === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Proveedor no encontrad0",
			});
		} else {
			res.status(200).json({
				estado: 1,
				mensaje: "Proveedor encontrado",
				Proveedor: proveedor,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//POST Crear un Proveedor
exports.createProveedor = async (req, res) => {
	const { nombre, direccion, telefono } = req.body;
	try {
		if (
			direccion == undefined ||
			nombre == undefined ||
			telefono == undefined
		) {
			res.status(400).json({
				estado: 0,
				mensaje: "BAD REQUEST",
			});
		} else {
			const proveedor = await Proveedor.create({
				nombre: nombre,
				direccion: direccion,
				telefono: telefono,
			});
			res.status(200).json({
				estado: 1,
				mensaje: "Proveedor creado correctamente",
				roveedor: proveedor,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//PUT Actualizar Proveedor
exports.updateProveedor = async (req, res) => {};
//DELETEEliminar un Proveedor
exports.deleteProveedor = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteProvee = await Proveedor.findByPk(id);
		if (deleteProvee === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Proveedor no encontrado",
			});
		} else {
			await deleteProvee.destroy();
			res.status(200).json({
				estado: 1,
				mensaje: "Proveedor Eliminado",
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
