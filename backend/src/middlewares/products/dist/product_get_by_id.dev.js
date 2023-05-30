"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getProductById;

var _database = require("../../sequelize/database.js");

function getProductById(req, res) {
  var _req$params, id, code;

  return regeneratorRuntime.async(function getProductById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$params = req.params, id = _req$params.id, code = _req$params.code;

          try {
            _database.Product.findOne({
              where: {
                id: id
              }
            }).then(function (product) {
              console.log(product);
              if (product) return res.json(product);else return res.json("El producto no existe.");
            });
          } catch (error) {
            res.json(error);
          }

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}