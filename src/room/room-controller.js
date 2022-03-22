const roomService = require("./room-service");
class RoomController {
	async roomList(req) {
		try {
			return { status: 200, body: await roomService.roomList(req.query) };
		} catch (error) {
			return {
				error: error.message,
			};
		}
	}
}

module.exports = new RoomController();
