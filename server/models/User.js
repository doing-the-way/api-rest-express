	const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
		character: String,
		anime: String,
		imageUrl: String
},{
		collection:"users"
});

module.exports = mongoose.model("Users", userSchema);
