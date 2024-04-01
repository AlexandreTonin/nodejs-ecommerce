const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbConnection");

const Pedido = sequelize.define("pedido", {
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "cliente", // Nome da tabela referenciada
      key: "id_cliente", // Nome da chave primária na tabela referenciada
    },
  },
  data_pedido: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Pedido
