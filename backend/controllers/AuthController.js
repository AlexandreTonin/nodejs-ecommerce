const createUser = require("../services/createUser");
const checkIfUserExists = require("../services/checkIfUserExists");
const validateEmail = require("../helpers/validateEmail");
const jwt = require("jsonwebtoken");
const createToken = require("../helpers/createToken");
const bcrypt = require("bcrypt");
const userAuthenticate = require("../services/userAuthenticate");
const verifyToken = require("../helpers/verifyToken");
const userHasToken = require("../helpers/userHasToken");

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
      return res
        .status(400)
        .json({ message: `O email ${email} já está cadastrado` });
    }

    const senha_hash = await bcrypt.hash(senha, 12);

    try {
      const newUser = await createUser(nome, email, senha_hash);

      const payload = {
        id_cliente: newUser.id_cliente,
        email: newUser.email,
      };

      const token = createToken(payload);
      console.log(`Novo usuário registrado: ${newUser.email},`);
      res.status(201).json({ newUser, token });
    } catch (error) {
      res.status(422).json(error);
      console.log(error);
    }
  }
  static async login(req, res) {
    const { email, senha } = req.body;

    const hasToken = await userHasToken(req);

    if (hasToken) {
      console.log("teste")
      return res.redirect("/");
    } else {
      const auth = await userAuthenticate(email, senha);
      console.log(auth)
      return res.status(200).json({msg:auth})
    }
  }
  static async forgotPassword(req, res) {}

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
