"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = productPost;

var _database = require("../../sequelize/database.js");

var _app = require("../../app.js");

var _expressValidator = require("express-validator");

function productPost(req, res) {
  var _req$body, code, productBrand, productName, model, price, productImage, result, data, createdProduct;

  return regeneratorRuntime.async(function productPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, code = _req$body.code, productBrand = _req$body.productBrand, productName = _req$body.productName, model = _req$body.model, price = _req$body.price, productImage = _req$body.productImage;
          result = (0, _expressValidator.validationResult)(req);

          if (result.isEmpty()) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.json(result.array().map(function (err) {
            return err.msg;
          })));

        case 4:
          _context.prev = 4;
          data = !req.file ? {
            code: code,
            productBrand: productBrand,
            productName: productName,
            model: model,
            price: price
          } : {
            code: code,
            productBrand: productBrand,
            productName: productName,
            model: model,
            price: price,
            productImage: req.file.filename
          };
          _context.next = 8;
          return regeneratorRuntime.awrap(_database.Product.create(data));

        case 8:
          createdProduct = _context.sent;
          return _context.abrupt("return", createdProduct ? function () {
            _app.io.emit("addproduct");

            res.json("Se ha a\xF1adido correctamente ".concat(productName, " ").concat(model, " (").concat(productBrand, ")"));
          } : res.json("Se ha producido un error al integrar el producto."));

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          res.json(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 12]]);
}