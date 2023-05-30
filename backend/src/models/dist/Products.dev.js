"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = productModel;

var _sequelize = require("sequelize");

function productModel(sequelize) {
  var ProductModel = sequelize.define("Product", {
    code: {
      type: _sequelize.DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    productBrand: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    productName: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: _sequelize.DataTypes.FLOAT,
      defaultValue: 0.0
    },
    productImage: {
      type: _sequelize.DataTypes.STRING,
      defaultValue: "null"
    },
    type: {
      type: _sequelize.DataTypes.STRING,
      defaultValue: "default",
      validate: {
        isIn: [["default", "faroles", "tableros", "repuestos", "accesorios", "cascos", "cubiertas", "lubricantes", "baterias", "frenos", "suspension", "kits"]]
      }
    }
  }, {
    timestamps: false
  });
  return productModel;
}
/*
    agregar:
    Modelo
*/