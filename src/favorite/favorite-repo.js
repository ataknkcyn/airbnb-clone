const favorite = require("./favorite-schema");

const favoriteRepo = {
	listFavorite: async ({
		user_id,
		page = 0,
		limit = 10,
		sort_field = "room_id",
		sort_type = "DESC",
		search = "",
		search_field = "",
	}) => {
		return await favorite
			.find({ user_id })
			.sort({ [sort_field]: sort_type })
			.skip(page * limit)
			.limit(limit);
	},
	insertFavorite: async (favoritesBody) => {
		delete favoritesBody._id;
		return await favorite.create({ ...favoritesBody });
	},
	deleteFavorite: async ({ room_id, user_id }) => {
		return await favorite.deleteOne({ room_id, user_id });
	},
	getOne: async ({ room_id, user_id }) => {
		return await favorite.findOne({ room_id, user_id });
	},
};

module.exports = favoriteRepo;
