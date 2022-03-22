const Room = require("./room-schema");

const roomRepo = {
	listRoom: async ({
		page = 0,
		limit = 10,
		sort_field = "room_id",
		sort_type = "DESC",
		search = "",
		search_field = "",
	}) => {
		return await Room.find({})
			.sort({ [sort_field]: sort_type })
			.skip(page * limit)
			.limit(limit);
	},
	getOne: async ({ room_id }) => {
		return await Room.findOne({ room_id });
	},
};

module.exports = roomRepo;
