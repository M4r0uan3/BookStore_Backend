const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const addUser = async (u) => {
  u.password = await bcrypt.hash(u.password, await bcrypt.genSalt());
  return await User.create(u);
};
// Generate JWT token
function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const options = {
    expiresIn: "6h",
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

// Verify JWT token
function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

async function authenticateUser(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user);

  return { user, token };
}

module.exports = {
    addUser,
    generateToken,
    verifyToken,
    authenticateUser
  };