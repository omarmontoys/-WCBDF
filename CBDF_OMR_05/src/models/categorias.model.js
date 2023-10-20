const { DataTypes } = require("sequelize");
const sequelize = new require("../config/db"); // ya la tenemos solo falta importarla

const Categoria = sequelize.define("Categoria", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	descripcion: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});
Categoria.sync()
	.then(() => {
		console.log("Tabla Categoria creada o ya existente"); // true
	})
	.catch((error) => {
		console.log("Error al crear la tabla categoria", error); // true
	});
module.exports = Categoria;
console.log(Categoria === sequelize.models.Categoria); // true
