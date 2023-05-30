"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _product_post = _interopRequireDefault(require("../middlewares/products/product_post.js"));

var _products_get = _interopRequireDefault(require("../middlewares/products/products_get.js"));

var _products_delete = _interopRequireDefault(require("../middlewares/products/products_delete.js"));

var _product_get_by_id = _interopRequireDefault(require("../middlewares/products/product_get_by_id.js"));

var _multer = _interopRequireDefault(require("multer"));

var _database = require("../sequelize/database.js");

var _expressValidator = require("express-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "./src/storage");
  },
  filename: function filename(req, file, cb) {
    var ext = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
    cb(null, Date.now() + file.originalname + ext);
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
var products = (0, _express.Router)();
products.get("/:id", _product_get_by_id["default"]);
products.get("/", _products_get["default"]);
products.post("/", upload.single("productImage"), function (req, res, next) {
  try {
    if (req.isAuthenticated()) {
      _database.User.findOne({
        where: {
          id: req.user
        }
      }).then(function (user) {
        if (!user) return res.json("No existe el usuario.");

        if (user) {
          return user.role === "admin" ? next() : res.json("Not authorized, not privileges");
        }
      });
    } else return res.json("Not authorized");
  } catch (err) {
    return res.json("err");
  }
}, [(0, _expressValidator.body)("productBrand", "Ingrese una marca").isLength(1), (0, _expressValidator.body)("productName", "Ingrese una marca").isLength(1), (0, _expressValidator.body)("model", "Ingrese un modelo").isLength(1), (0, _expressValidator.body)("price", "Ingrese valor").isLength(1).isNumeric(), (0, _expressValidator.body)("code", "Ingrese codigo").isLength(1).isNumeric()], _product_post["default"]);
products["delete"]("/:id", _products_delete["default"]);
var _default = products;
exports["default"] = _default;