const userSchema = require("./user-schema");
const userRepo = require("./user-repo");
const userService = require("./user-service");
const userController = require("./user-controller");

module.exports = {
	userSchema,
	userRepo,
	userService,
	userController,
};
