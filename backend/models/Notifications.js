const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

/**
 * Notification model
 */
const Notification = sequelize.define(
	"Notification",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				len: [3, 30],
			},
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
	},
	{
		timestamps: true,
		tableName: "notifications",
	}
);

module.exports = Notification;
