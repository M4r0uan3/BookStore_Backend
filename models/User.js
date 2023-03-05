const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  image: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
