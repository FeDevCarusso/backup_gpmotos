"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupplieById = getSupplieById;
exports.GET_SUPPLIE_BY_ID = exports.getAllSupplies = exports.GET_ALL_SUPPLIES = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = "http://localhost:3001";
var GET_ALL_SUPPLIES = "asdojubhasifhvadsivaipf1@";
exports.GET_ALL_SUPPLIES = GET_ALL_SUPPLIES;

var getAllSupplies = function getAllSupplies() {
  return function _callee(dispatch) {
    var axiosResponse, axiosData;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/products")));

          case 2:
            axiosResponse = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(axiosResponse.data);

          case 5:
            axiosData = _context.sent;
            return _context.abrupt("return", dispatch({
              type: GET_ALL_SUPPLIES,
              payload: axiosData
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getAllSupplies = getAllSupplies;
var GET_SUPPLIE_BY_ID = "fasdubgfhadiuap13341pojfad";
exports.GET_SUPPLIE_BY_ID = GET_SUPPLIE_BY_ID;

function getSupplieById(id) {
  var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (empty === true) return {
    type: GET_SUPPLIE_BY_ID,
    payload: []
  };
  return function _callee2(dispatch) {
    var axiosResponse, axiosData;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(API_URL, "/products/").concat(id)));

          case 2:
            axiosResponse = _context2.sent;
            _context2.next = 5;
            return regeneratorRuntime.awrap(axiosResponse.data);

          case 5:
            axiosData = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: GET_SUPPLIE_BY_ID,
              payload: axiosData
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
}