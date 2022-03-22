const mongoose = require("../db");
const { Schema } = mongoose;

const userSchema = new Schema({
	_id: { type: Schema.Types.ObjectId, auto: true },
	e_mail: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
