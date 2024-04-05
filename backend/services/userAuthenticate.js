const bcrypt = require("bcrypt");
const checkIfUserExists = require("./checkIfUserExists");
const Cliente = require("../models/Cliente");
const createToken = require("../helpers/createToken");

async function userAuthenticate(email, senha) {
  const userExists = await checkIfUserExists(email);

  if(!email || !senha) {
    return "Email ou senha não foram informados"
  }

  if (!userExists) {
    return `O email informado não foi encontrado`;
  }

  const user = await Cliente.findOne({ where: { email: email } });

  const checkPassword = await bcrypt.compare(senha, user.senha_hash);

  const payload = {
    id_cliente: user.id_cliente,
    email: user.email,
  };
  const token = createToken(payload);

  if (checkPassword) {
    return {msg: "Autenticado com sucesso", token: token};
  } else {
    return "Senha incorreta";
  }
}

module.exports = userAuthenticate;
