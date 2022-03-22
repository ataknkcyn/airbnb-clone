const user = require("./user-schema");

const roomRepo = {
	userCheck: async (e_mail, password) => {
		return await user.find({ e_mail: e_mail, password: password });
	},
	findOne: async ({ e_mail }) => {
		return await user.findOne({ e_mail });
	},
	createUser: async (userBody) => {
		return await user.create(userBody);
	},
};

module.exports = roomRepo;
