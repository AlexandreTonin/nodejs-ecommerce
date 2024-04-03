const bcrypt = require("bcrypt");
const Cliente = require("../models/Cliente");

async function createUser(nome, email, senha, adm) {
  const newUser = await Cliente.create({
    nome: nome,
    email: email,
    senha_hash: senha
  });
  return newUser;
}

module.exports = createUser;
