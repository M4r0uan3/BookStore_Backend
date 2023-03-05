const userServices = require("../services/userServices");
const _ = require("lodash");  

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userServices.getUserById(req.params.id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const user = await userServices.getUserByEmail(req.params.email);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// const addUser = async (req, res) => {
//   try {
//     const user = await userServices.addUser(req.body);
//     res.status(200).json({ user });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };

const deleteUser = async (req, res) => {
  try {
    const user = await userServices.deleteUser(req.params.id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userServices.updateUser(req.body);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  // addUser,
  deleteUser,
  updateUser,
  getUserByEmail,
};
