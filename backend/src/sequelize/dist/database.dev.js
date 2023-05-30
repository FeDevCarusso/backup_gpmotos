"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserData = exports.User = exports.Product = exports.sequelize = void 0;

var _sequelize = require("sequelize");

var _dotenv = require("dotenv");

var _Products = _interopRequireDefault(require("../models/Products.js"));

var _Users = _interopRequireDefault(require("../models/Users.js"));

var _UserDataModel = _interopRequireDefault(require("../models/UserDataModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var DB_URL = process.env.DB_URL;
var sequelize = new _sequelize.Sequelize(DB_URL, {
  dialect: "postgres",
  logging: false //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //     },
  //   },

});
exports.sequelize = sequelize;
(0, _Products["default"])(sequelize);
(0, _Users["default"])(sequelize);
(0, _UserDataModel["default"])(sequelize);
var _sequelize$models = sequelize.models,
    Product = _sequelize$models.Product,
    User = _sequelize$models.User,
    UserData = _sequelize$models.UserData;
exports.UserData = UserData;
exports.User = User;
exports.Product = Product;
User.belongsTo(UserData);