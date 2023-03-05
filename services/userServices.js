const User = require("../models/User");

const getUsers = async () => {
  return await User.find().select("-password");
};

const getUserById = async (idU) => {
  return await User.findOne({ _id: idU });
};

const deleteUser = async (idU) => {
  return await User.deleteOne({ _id: idU });
};

const updateUser = async (user) => {
  return await User.findByIdAndUpdate(user._id, user);
};

const getUserByEmail = async (emailU) => {
  return await User.findOne({ email: emailU }).select("-password");
};

module.exports = {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
  getUserByEmail,
};
