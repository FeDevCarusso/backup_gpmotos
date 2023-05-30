"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = userModel;

var _sequelize = require("sequelize");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function userModel(sequelize) {
  var UserModel = sequelize.define("User", {
    firstName: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: _sequelize.DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: _sequelize.DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: _sequelize.DataTypes.STRING,
      defaultValue: "client",
      validate: {
        isIn: [["client", "admin"]]
      }
    }
  });
  UserModel.beforeCreate(function (user) {
    return _bcrypt["default"].hash(user.password, 10).then(function (hash) {
      user.password = hash;
    })["catch"](function (err) {
      throw new Error(err);
    });
  });
}