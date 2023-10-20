const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // ya la tenemos solo falta importarla

const Factura = sequelize.define("Factura", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	fecha: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	id_Cliente: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
});
Factura.sync()
	.then(() => {
		console.log("Tabla Factura creada o ya existente"); // true
	})
	.catch((error) => {
		console.log("Error al crear la tabla Factura", error); // true
	});
module.exports = Factura;
console.log(Factura === sequelize.models.Factura); // true
