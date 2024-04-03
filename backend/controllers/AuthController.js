const createUser = require("../services/createUser");
const checkIfUserExists = require("../services/checkIfUserExists");
const validateEmail = require("../helpers/validateEmail");
const jwt = require("jsonwebtoken");
const createToken = require("../helpers/createToken");

module.exports = class AuthController {
  static async register(req, res) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ msg: "Os campos nome, email e senha devem ser preenchidos" });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ msg: "o email informado é inválido" });
    }

    const userExists = await checkIfUserExists(email);

    if (userExists) {
      console.error(`Erro: O email ${email} já está cadastrado`);
      return res.status(400).json({ message: `O email ${email} já está cadastrado` });
    }
    
    try {
      const newUser = await createUser(nome, email, senha, adm);

      const payload = {
        id_cliente: newUser.id_cliente,
        email: newUser.email,
      };

      const token = createToken(payload);
      console.log(`Novo usuário registrado: ${newUser.email},`)
      res.status(201).json({ newUser, token });
    } catch (error) {
      res.status(422).json(error);
      console.log(error);
    }
  }
  static async login(req, res) { }
  static async forgotPassword(req, res) { }

  // GET ROUTES
  static async getLogin(req, res) {
    res.status(200).json({ rota: "login" });
  }
  static async getRegister(req, res) {
    res.status(200).json({ rota: "register" });
  }
  static async getForgotPassword(req, res) {
    res.status(200).json({ rota: "forgotpassword" });
  }
};
