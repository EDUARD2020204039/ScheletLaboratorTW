const User = require("./User");
const Role = require("./Role");
const Library = require("./Library");
const Book = require("./Book");
const BookDetail = require("./BookDetail");
const Notification = require("./Notifications");

/**
 * TODO: Definiți relațiile dintre modelele bazei de date.
 */

User.belongsToMany(Role, { through: "UserRoles", foreignKey: "userId" });
Role.belongsToMany(User, { through: "UserRoles", foreignKey: "roleId" });

Library.hasMany(Book, { foreignKey: "libraryId", onDelete: "CASCADE" });
Book.belongsTo(Library, { foreignKey: "libraryId" });

Book.hasOne(BookDetail, { foreignKey: "bookId", onDelete: "CASCADE" });
BookDetail.belongsTo(Book, { foreignKey: "bookId" });

User.hasMany(Notification, { foreignKey: "userId", onDelete: "CASCADE" });
Notification.belongsTo(User, { foreignKey: "userId" });

module.exports = {
	User,
	Role,
	Book,
	BookDetail,
	Library,
	Notification,
};
