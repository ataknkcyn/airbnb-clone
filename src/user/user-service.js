const userRepo = require("./user-repo");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
class UserService {
	async login({ e_mail, password }) {
		let user = await userRepo.findOne({ e_mail });
		if (user && user.password === password) {
			let token = jwt.sign({ user_id: user._id, e_mail }, JWT_SECRET, { expiresIn: "4h" });
			user = user._doc;
			delete user.password;
			return { ...user, token };
		}
		throw new Error("Invalid e_mail or password");
	}

	async register({ e_mail, password }) {
		const isRegisteredMail = await userRepo.findOne({ e_mail });
		if (isRegisteredMail) {
			throw new Error("e_mail already exists");
		}
		let user = await userRepo.createUser({ e_mail, password });
		const token = jwt.sign({ user_id: user._id, e_mail }, JWT_SECRET, {
			expiresIn: "4h",
		});
		return { ...user._doc, token };
	}
}
module.exports = new UserService();
