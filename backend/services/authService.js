const { Sequelize } = require("sequelize");
const { User } = require("../models");
const { generateToken } = require("../utils/jwtHelper");

/**
 * Register a new user
 * @param {string} username - Username
 * @param {string} email - Email
 * @param {string} password - Password
 * @returns {Object} - User object and token
 */
const registerUser = async (username, email, password) => {
	const existingUser = await User.findOne({
		where: {
			[Sequelize.Op.or]: [{ email }, { username }],
		},
	});

	if (existingUser) {
		throw new Error("User already exists");
	}

	const user = await User.create({
		username,
		email,
		password,
	});

	const token = generateToken({
		id: user.id,
		email: user.email,
		username: user.username,
	});

	return {
		user: user.toJSON(),
		token,
	};
};

/**
 * Login user
 * @param {string} email - Email
 * @param {string} password - Password
 * @returns {Object} - User object and token
 */
const loginUser = async (email, password) => {
	const user = await User.scope("withPassword").findOne({
		where: { email },
	});

	if (!user) {
		throw new Error("Invalid email or password");
	}

	const isPasswordValid = await user.comparePassword(password);

	if (!isPasswordValid) {
		throw new Error("Invalid email or password");
	}

	const token = generateToken({
		id: user.id,
		email: user.email,
		username: user.username,
	});

	const userData = user.toJSON();
	delete userData.password;

	return {
		user: userData,
		token,
	};
};

module.exports = {
	registerUser,
	loginUser,
};
