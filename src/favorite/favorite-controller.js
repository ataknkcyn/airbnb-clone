const favoriteService = require("./favorite-service");

class FavoriteController {
	async listFavorite(req) {
		return { status: 200, body: await favoriteService.listFavorite({ ...req.query, ...req.user }) };
	}
	async insertFavorite(req) {
		if (!req.params.room_id) throw new Error("Room ID is required");
		return { status: 201, body: await favoriteService.insertFavorite({ ...req.params, ...req.user }) };
	}
	async deleteFavorite(req) {
		if (!req.params.room_id) throw new Error("Room ID is required");
		return { status: 200, body: await favoriteService.deleteFavorite({ ...req.params, ...req.user }) };
	}
}

module.exports = new FavoriteController();
