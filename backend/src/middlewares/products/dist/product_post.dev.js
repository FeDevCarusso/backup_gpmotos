"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = productPost;

var _database = require("../../sequelize/database.js");

var _app = require("../../app.js");

var _expressValidator = require("express-validator");

function productPost(req, res) {
  var _req$body, code, productBrand, productName, model, price, result, createProduct, data;

  return regeneratorRuntime.async(function productPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.file.filename);
          _req$body = req.body, code = _req$body.code, productBrand = _req$body.productBrand, productName = _req$body.productName, model = _req$body.model, price = _req$body.price;
          result = (0, _expressValidator.validationResult)(req);

          if (result.isEmpty()) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json(result.array()));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(_database.Product.create({
            code: code,
            productBrand: productBrand,
            productName: productName,
            model: model,
            price: price,
            productImage: req.file.filename
          }));

        case 9:
          createProduct = _context.sent;

          if (!createProduct) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.json("El producto se ha creado con exito"));

        case 14:
          return _context.abrupt("return", res.json("Se ha producido un error"));

        case 15:
          try {
            data = !req.file;
          } catch (error) {
            res.json(error);
          }

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}