const userService = require("./user-service");

class UserController {
	async login(req) {
		if (!(req.query.e_mail && req.query.password)) {
			throw new Error("e_mail and password are required");
		}
		return { status: 200, body: await userService.login(req.query) };
	}

	async register(req) {
		if (!(req.body.e_mail && req.body.password)) {
			throw new Error("e_mail and password are required");
		}
		return { status: 201, body: await userService.register(req.body) };
	}
}

module.exports = new UserController();
