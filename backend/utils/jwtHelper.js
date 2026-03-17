const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Generate JWT token
 * @param {Object} payload - Data to be encoded in token
 * @returns {string} - JWT token
 */
const generateToken = (payload) => {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = {
	generateToken,
};
