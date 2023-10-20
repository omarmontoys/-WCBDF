const Cliente = require("../models/clientes.model");

//GET- Todas los Clientes
exports.getAllCliente = async (req, res) => {
	try {
		const clientes = await Cliente.findAll();
		res.status(200).json({
			estado: 1,
			mensaje: "Clientes encontrados",
			clientes: clientes,
		});
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//GET- Un cliente por id
exports.getClienteId = async (req, res) => {
	const { id } = req.params;
	try {
		const cliente = await Cliente.findByPk(id);
		if (cliente === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Cliente no encontrad0",
			});
		} else {
			res.status(200).json({
				estado: 1,
				mensaje: "Cliente encontrado",
				cliente: cliente,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//POST Crear un Cliente
exports.createCliente = async (req, res) => {
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
			const cliente = await Cliente.create({
				nombre: nombre,
				direccion: direccion,
				telefono: telefono,
			});
			res.status(200).json({
				estado: 1,
				mensaje: "Cliente creado correctamente",
				cliente: cliente,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//PUT Actualizar cliente
exports.updateCliente = async (req, res) => {};
//DELETEEliminar un cliente
exports.deleteCliente = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteClient = await Cliente.findByPk(id);
		if (deleteClient === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Cliente no encontrado",
			});
		} else {
			await deleteClient.destroy();
			res.status(200).json({
				estado: 1,
				mensaje: "Cliente Eliminado",
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
