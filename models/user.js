const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true] },
  email: { type: String, required: [true], unique: true },
  password: { type: String, required: [true] },
});

//Validator
userSchema.plugin(uniqueValidator, { message: "Error, email already exists." });

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
