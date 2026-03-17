/**
 * Error handling middleware
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const errorMiddleware = (err, req, res, next) => {
	console.error(err);

	const statusCode = err.statusCode || err.status || res.statusCode;
	const finalStatusCode =
		statusCode && statusCode >= 400 ? statusCode : 500;

	res.status(finalStatusCode).json({
		message: err.message || 'Eroare Interna a Serverului',
		stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
	});
};

module.exports = errorMiddleware;
