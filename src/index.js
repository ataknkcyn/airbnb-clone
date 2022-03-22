const { favoriteSchema, favoriteRepo, favoriteService, favoriteController } = require("./favorite");
const { userSchema, userRepo, userService, userController } = require("./user");
const { roomSchema, roomRepo, roomService, roomController } = require("./room");
const db = require("./db");
const middleware = require("./middleware");
const routes = require("./routes");

module.exports = {
	favoriteSchema,
	favoriteRepo,
	favoriteService,
	favoriteController,
	userSchema,
	userRepo,
	userService,
	userController,
	roomSchema,
	roomRepo,
	roomService,
	roomController,
	db,
	middleware,
	routes,
};
