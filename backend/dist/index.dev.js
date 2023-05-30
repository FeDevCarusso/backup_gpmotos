"use strict";

var _app = _interopRequireDefault(require("./src/app.js"));

var _database = require("./src/sequelize/database.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_database.sequelize.sync({
  force: false,
  alter: false
}).then(function _callee2(data) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!data) {
            _context2.next = 7;
            break;
          }

          console.log("Database connection succefull... ");
          _context2.next = 4;
          return regeneratorRuntime.awrap(_database.User.findOne({
            where: {
              email: "gpmotos_alejo@hotmail.com"
            }
          }).then(function _callee(user) {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (user) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 3;
                    return regeneratorRuntime.awrap(_database.User.create({
                      firstName: "Alexis",
                      lastName: "Alejo",
                      email: "gpmotos_alejo@hotmail.com",
                      username: "Admin",
                      password: "Aa12345",
                      role: "admin"
                    }));

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }));

        case 4:
          return _context2.abrupt("return", _app["default"].listen(3001, console.log("Server running [dev2.1] on http://localhost:3001")));

        case 7:
          return _context2.abrupt("return", console.log("Cannot connect to Database, please try again."));

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});