const Categoria = require("../models/categorias.model");

//GET- Todas las categorias
exports.getAllCategory = async (req, res) => {
	try {
		const categorys = await Categoria.findAll();
		res.status(200).json({
			estado: 1,
			mensaje: "Categorias encontradas",
			categorys: categorys,
		});
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//GET- Una categoría por id
exports.getCategoryId = async (req, res) => {
	const { id } = req.params;
	try {
		const category = await Categoria.findByPk(id);
		if (category === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Categoria no encontrada",
			});
		} else {
			res.status(200).json({
				estado: 1,
				mensaje: "Categoría encontrada",
				category: category,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//POST Crear una categoria
exports.createCategory = async (req, res) => {
	const { descripcion } = req.body;
	try {
		if (descripcion == undefined) {
			res.status(400).json({
				estado: 0,
				mensaje: "BAD REQUEST",
			});
		} else {
			const categoria = await Categoria.create({ descripcion: descripcion });
			res.status(200).json({
				estado: 1,
				mensaje: "Categoria creada correctamente",
				categoria: categoria,
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
//PUT Actualizar categoria
exports.updateCategory = async (req, res) => {
	const { id } = req.params;
	const { category } = req.body;
	try {
		const category = await Categoria.findByPk(id);
		if (category === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Categoria no encontrada",
			});
		} else {
			if (descripcion == undefined) {
				res.status(404).json({
					estado: 0,
					mensaje: "Falta Parametros",
				});
			} else {
				await category.update({ descripcion: descripcion });
				res.status(200).json({
					estado: 1,
					mensaje: "Categoria Actualizada Correctamente",
					category: category,
				});
			}
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
	//Buscamos la categoria
	//Actualizamos
	//Guardamos
};
//DELETEEliminar una categoria
exports.deleteCategory = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteCatego = await Categoria.findByPk(id);
		if (deleteCatego === null) {
			res.status(404).json({
				estado: 0,
				mensaje: "Categoria no encontrada",
			});
		} else {
			await deleteCatego.destroy();
			res.status(200).json({
				estado: 1,
				mensaje: "Categoria Eliminada",
			});
		}
	} catch (error) {
		res.status(500).json({
			estado: 0,
			mensaje: "Ocurrio un error desconocido",
		});
	}
};
