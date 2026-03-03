const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

/**
 * Book model
 */
const Book = sequelize.define(
	"Book",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				len: [1, 30],
			},
		},
		author: {
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
		tableName: "books",
	}
);

module.exports = Book;
