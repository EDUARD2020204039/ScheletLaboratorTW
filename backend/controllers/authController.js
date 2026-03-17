const authService = require("../services/authService");

/**
 * Register a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const register = async (req, res, next) => {
	try {
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res.status(400).json({
				message: "Username, email, and password are required",
			});
		}

		const normalizedUsername = String(username).trim();
		const normalizedEmail = String(email).trim().toLowerCase();
		const normalizedPassword = String(password);

		if (!normalizedUsername || !normalizedEmail || !normalizedPassword) {
			return res.status(400).json({
				message: "Username, email, and password are required",
			});
		}

		const result = await authService.registerUser(
			normalizedUsername,
			normalizedEmail,
			normalizedPassword
		);

		return res.status(201).json(result);
	} catch (error) {
		if (error.message === "User already exists") {
			return res.status(409).json({ message: error.message });
		}

		return next(error);
	}
};

/**
 * Login a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				message: "Email and password are required",
			});
		}

		const normalizedEmail = String(email).trim().toLowerCase();
		const normalizedPassword = String(password);

		if (!normalizedEmail || !normalizedPassword) {
			return res.status(400).json({
				message: "Email and password are required",
			});
		}

		const result = await authService.loginUser(
			normalizedEmail,
			normalizedPassword
		);

		return res.status(200).json(result);
	} catch (error) {
		if (error.message === "Invalid email or password") {
			return res.status(401).json({ message: error.message });
		}

		return next(error);
	}
};

/**
 * Get current user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const getProfile = async (req, res, next) => {
	try {
		if (!req.user) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const userData = req.user.toJSON();
		delete userData.password;

		return res.status(200).json({ user: userData });
	} catch (error) {
		return next(error);
	}
};

module.exports = {
	register,
	login,
	getProfile,
};
