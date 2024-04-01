const router = require("express").Router();
const AuthController = require("../controllers/AuthController");

// get
router.get("/login", AuthController.getLogin);
router.get("/register", AuthController.getRegister);
router.get("/forgotpassword", AuthController.getForgotPassword);

// post
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/forgotpassword", AuthController.forgotPassword);

module.exports = router;