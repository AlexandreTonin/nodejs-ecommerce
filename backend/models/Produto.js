const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbConnection");

const Produto = sequelize.define("produto", {
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantidade_estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imagem_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

module.exports = Produto;
