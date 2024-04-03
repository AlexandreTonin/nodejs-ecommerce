// modules
const express = require("express");
require("dotenv").config();
const db = require("./db/dbConnection");
const AuthRoutes = require("./routes/AuthRoutes");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// express
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 3);
app.use(morgan("short"));
app.use(cookieParser());

// models
const Produto = require("./models/Produto");
const Cliente = require("./models/Cliente");
const Pedido = require("./models/Pedido");
const ItensPedido = require("./models/ItensPedido");

// routes
app.use("/", AuthRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ rota: "/" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("Servidor rodando na porta: ", process.env.SERVER_PORT);
  db.syncDatabase();
});
