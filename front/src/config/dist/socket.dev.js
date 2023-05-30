"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socket = void 0;

var _socket = require("socket.io-client");

var socket = (0, _socket.io)(process.env.REACT_APP_API_URL);
exports.socket = socket;