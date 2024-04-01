require("dotenv").config();
const jwt = require("jsonwebtoken");

function createToken(payload, res) {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
}

module.exports = createToken;
