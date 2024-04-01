const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbConnection");

const ItensPedido = sequelize.define("item_pedido", {
  id_item: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "pedido", // Nome da tabela referenciada
      key: "id_pedido", // Nome da chave primária na tabela referenciada
    },
  },
  id_produto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "produto", // Nome da tabela referenciada
      key: "id_produto", // Nome da chave primária na tabela referenciada
    },
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = ItensPedido;
