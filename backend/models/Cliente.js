const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbConnection");

const Cliente = sequelize.define("cliente", {
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  senha_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  administrador: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  cidade: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  estado: {
    type: DataTypes.CHAR(2),
    allowNull: true,
  },
  cep: {
    type: DataTypes.CHAR(8),
    allowNull: true,
  },
});

module.exports = Cliente
