"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = _interopRequireDefault(require("./products.js"));

var _login = _interopRequireDefault(require("./login.js"));

var _checklogin = _interopRequireDefault(require("./checklogin.js"));

var _logout = _interopRequireDefault(require("./logout.js"));

var _app = require("../app.js");

var _register = _interopRequireDefault(require("./register.js"));

var _database = require("../sequelize/database.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //products

router.use("/products", _products["default"]); //autuh

router.use("/login", _login["default"]);
router.use("/register", _register["default"]); //check_auth

router.use("/checkauth", _checklogin["default"]); //logout

router.use("/logout", _logout["default"]); //fetch images

router.get("/images/:image", function (req, res) {
  var image = req.params.image;
  console.log(image);
  return res.sendFile(_app.storagePath + "/".concat(image));
}); //gettest

router.get("/allusers", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = res;
          _context.next = 3;
          return regeneratorRuntime.awrap(_database.User.findAll());

        case 3:
          _context.t1 = _context.sent;

          _context.t0.json.call(_context.t0, _context.t1);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
var _default = router;
exports["default"] = _default;