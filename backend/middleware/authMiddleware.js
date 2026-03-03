const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();

/**
 * Middleware to authenticate JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const authenticate = async (err, req, res, next) => {
	if (err) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	const token = req.headers.authorization;
	if (!token || !token.startsWith("Bearer")) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	const tokenString = token.split(" ")[1];
	try {
		const decoded = jwt.verify(tokenString, process.env.JWT_SECRET);
		const user = await User.findOne({ where: { id: decoded.id } });
		if (!user) {
			return res.status(401).json({ message: "Unauthorized" });
		}
		req.user = user;
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = { authenticate };
