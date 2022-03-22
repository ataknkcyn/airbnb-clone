const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config");
mongoose
	.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((a) => {
		console.log("Connected to MONGODB");
	});

module.exports = mongoose;
