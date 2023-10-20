const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // ya la tenemos solo falta importarla

const Producto = sequelize.define("Producto", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	descripcion: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	precio: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	id_categoria: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	id_proveedor: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
});
Producto.sync()
	.then(() => {
		console.log("Tabla Producto creada o ya existente"); // true
	})
	.catch((error) => {
		console.log("Error al crear la tabla Producto", error); // true
	});
module.exports = Producto;
console.log(Producto === sequelize.models.Producto); // true
