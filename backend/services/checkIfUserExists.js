const Cliente = require("../models/Cliente");

async function checkIfUserExists(email) {
  const userExists = await Cliente.findOne({ where: { email: email } });
  return userExists;
}

module.exports = checkIfUserExists;
