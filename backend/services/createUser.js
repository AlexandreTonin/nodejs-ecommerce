const bcrypt = require("bcrypt");
const Cliente = require("../models/Cliente");

async function createUser(nome, email, senha, adm = false) {
  const newUser = await Cliente.create({
    nome: nome,
    email: email,
    senha_hash: senha,
    administrador: adm,
  });

  return newUser;
}

module.exports = createUser;
