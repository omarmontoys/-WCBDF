const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // ya la tenemos solo falta importarla

const Ventas = sequelize.define("Ventas", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	id_factura: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	id_productos: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	cantidad: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
});
Ventas.sync()
	.then(() => {
		console.log("Tabla Ventas creada o ya existente"); // true
	})
	.catch((error) => {
		console.log("Error al crear la tabla Ventas", error); // true
	});
module.exports = Ventas;
console.log(Ventas === sequelize.models.Ventas); // true
