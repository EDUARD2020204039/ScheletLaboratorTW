const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const { sequelize } = require("../config/database");

/**
 * Role model
 */
const Role = sequelize.define(
	"Role",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		tableName: "roles",
		timestamps: false,
	}
);

module.exports = Role;
