const authServices = require("../services/authServices");

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const { token } = await authServices.authenticateUser(
      email,
      password
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

async function signUp(req, res) {
  // const { email, password } = req.body;
  try {
    const user = await authServices.addUser(req.body);
    const token = authServices.generateToken(user);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: "Email already exists!" });
  }
}

module.exports = {
  login,
  signUp,
};
