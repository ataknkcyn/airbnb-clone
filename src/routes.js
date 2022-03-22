const express = require("express");
const router = express.Router();
const callback = require("./express-callback");
const { auth } = require("./middleware");

const { userController } = require("./user");
const { favoriteController } = require("./favorite");
const { roomController } = require("./room");

router.get("/login", callback(userController.login));
router.post("/register", callback(userController.register));

router.get("/rooms", callback(roomController.roomList));

//isimlendirme olarak tam olarak istenileni yansitmiyor duzeltilmesi gerekiyor
router.get("/favorite", auth, callback(favoriteController.listFavorite));

// Direkt olarak dokuman alinarakta ekleme islemi gerceklestirilebilir ama trafigi arttirabilir
router.post("/favorite/:room_id", auth, callback(favoriteController.insertFavorite));

// Direkt olarak favorite_id alinarak da silinebilir
router.delete("/favorite/:room_id", auth, callback(favoriteController.deleteFavorite));

/**
 * Arayuz icin
 *
 */
const path = require("path");

router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/view/index.html"));
});

module.exports = router;
