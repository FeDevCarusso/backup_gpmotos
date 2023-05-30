"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllRepuestos = getAllRepuestos;
exports.GET_ALL_REPUESTOS = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//vars
var REACT_APP_API_URL = process.env.REACT_APP_API_URL; //types

var GET_ALL_REPUESTOS = "b447465d50208e62946813a51909c260"; //actions

exports.GET_ALL_REPUESTOS = GET_ALL_REPUESTOS;

function getAllRepuestos() {
  return function _callee(dispatch) {
    var axiosResponse, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(REACT_APP_API_URL, "/products")));

          case 2:
            axiosResponse = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(axiosResponse.data);

          case 5:
            data = _context.sent;
            console.log(data);
            dispatch({
              type: GET_ALL_REPUESTOS,
              payload: data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}