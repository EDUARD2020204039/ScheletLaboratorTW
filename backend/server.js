const express = require("express");
const cors = require("cors");
const { sequelize } = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
require("dotenv").config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

// Base route
app.get("/", (req, res) => {
	res.json({ message: "Welcome!" });
});

// Error handling middleware
app.use(errorMiddleware);

// Start server
const startServer = async () => {
	try {
		// Sync database
		await sequelize.sync({ force: false });
		console.log("Database connected successfully");

		// Start server
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		process.exit(1);
	}
};

startServer();
