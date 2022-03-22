const mongoose = require("../db");
const { Schema } = mongoose;

const favoriteSchema = new Schema({
	user_id: { type: "String" },
	room_id: { type: "Number" },
	host_id: { type: "Number" },
	room_type: { type: "String" },
	address: { type: "String" },
	reviews: { type: "Number" },
	overall_satisfaction: { type: "String" },
	accommodates: { type: "Number" },
	bedrooms: { type: "Number" },
	bathrooms: { type: "Number" },
	price: { type: "Number" },
	last_modified: { type: "Date" },
	latitude: { type: "Number" },
	longitude: { type: "Number" },
	location: { type: "String" },
	name: { type: "String" },
	currency: { type: "String" },
	rate_type: { type: "String" },
});

const Favorite = mongoose.model("favorites", favoriteSchema);

module.exports = Favorite;
