const roomRepo = require("./room-repo");

class RoomService {
	async roomList(filter) {
		return await roomRepo.listRoom(filter);
	}

	async getOne(room_id) {
		return await roomRepo.getOne({ room_id });
	}
}

module.exports = new RoomService();
