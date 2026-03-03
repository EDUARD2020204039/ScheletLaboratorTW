const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

/**
 * Library model
 */
const Library = sequelize.define(
	"Library",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				len: [3, 50],
			},
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [3, 100],
			},
		},
	},
	{
		timestamps: true,
		tableName: "libraries",
	}
);

module.exports = Library;
