"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = isAuthenticated;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = "http://localhost:3001";

function isAuthenticated() {
  var isAuthenticated;
  return regeneratorRuntime.async(function isAuthenticated$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          isAuthenticated = false;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/checkauth"), {
            withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json"
            }
          }).then(function (response) {
            if (response.data === true) {
              isAuthenticated = true;
            }
          }));

        case 3:
          return _context.abrupt("return", isAuthenticated);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}