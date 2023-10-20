const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // ya la tenemos solo falta importarla

const Cliente = sequelize.define("Cliente", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	direccion: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	telefono: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
});
Cliente.sync()
	.then(() => {
		console.log("Tabla Cliente creada o ya existente"); // true
	})
	.catch((error) => {
		console.log("Error al crear la tabla cliente", error); // true
	});
module.exports = Cliente;
console.log(Cliente === sequelize.models.Cliente); // true
