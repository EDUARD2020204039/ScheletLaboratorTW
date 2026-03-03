const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

/**
 * User model
 */
const BookDetail = sequelize.define(
	"BookDetail",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		pages: {
			type: DataTypes.INTEGER,
		},
		publishedYear: {
			type: DataTypes.INTEGER,
		},
		isbn: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		timestamps: true,
		tableName: "bookDetails",
	}
);

module.exports = BookDetail;
