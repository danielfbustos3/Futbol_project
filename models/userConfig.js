mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userConfigSchema = new mongoose.Schema({
  userId: { type: String, required: [true], unique: true },
  themeSelected: { type: String, required: [true] },
  favoritePlayers: { type: Array },
});

//Validator

module.exports =
  mongoose.models.UserConfig || mongoose.model("UserConfig", userConfigSchema);
