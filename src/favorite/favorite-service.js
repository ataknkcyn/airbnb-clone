const favoriteRepo = require("./favorite-repo");
const { roomService } = require("../room");
class FavoriteService {
	async listFavorite(filter) {
		console.log(filter);
		let userFavoriteList = await favoriteRepo.listFavorite(filter);
		if (userFavoriteList.length === 0) {
			throw new Error("User Favorite List is empty");
		}
		return userFavoriteList;
	}

	async insertFavorite({ room_id, user_id }) {
		const responses = await Promise.all([
			roomService.getOne(Number(room_id)),
			favoriteRepo.getOne({ room_id, user_id }),
		]);
		const room = responses[0];
		const isFavoriteExists = responses[1];
		if (!room) throw new Error("Room is not found");
		if (isFavoriteExists) throw new Error("Room is already in favorite list");
		const favorite = await favoriteRepo.insertFavorite({ ...room._doc, user_id });
		return favorite;
	}

	async deleteFavorite({ room_id, user_id }) {
		const room = await favoriteRepo.getOne({ room_id, user_id });
		if (!room) throw new Error("Room is not exists favorite list ");
		const favorite = await favoriteRepo.deleteFavorite({ room_id, user_id });
		return favorite;
	}
}

module.exports = new FavoriteService();
