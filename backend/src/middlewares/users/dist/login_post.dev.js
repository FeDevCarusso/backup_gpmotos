"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = login_post;

var _app = require("../../app.js");

function login_post(req, res) {
  if (req.isAuthenticated()) {
    _app.io.emit("logged_in");

    return res.json("done");
  } else {
    res.json("no");
  }
}