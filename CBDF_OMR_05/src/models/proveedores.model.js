const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // ya la tenemos solo falta importarla

const Proveedor = sequelize.define("Proveedor", {
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
Proveedor.sync()
	.then(() => {
		console.log("Tabla Proveedor creada o ya existente"); // true
	})
	.catch((error) => {
		console.log("Error al crear la tabla Proveedor", error); // true
	});
module.exports = Proveedor;
console.log(Proveedor === sequelize.models.Proveedor); // true
