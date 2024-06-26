const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({msg: "Acesso não autorizado"})
  }

  jwt.verify(token, process.env.SECRET_KEY, (err,user)=>{
    if(err) {
        return res.status(403).json({msg: "Token Inválido ou expirado"})
    }
    req.user = user;
    next()
  })
}

module.exports = verifyToken;
