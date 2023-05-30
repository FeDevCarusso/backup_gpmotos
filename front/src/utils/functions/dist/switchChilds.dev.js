"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = switchChilds;

function switchChilds(children) {
  for (var i = 0; i < children.length; i++) {
    if (children[i].tagName === "DIV") {
      var dChildren = children[i].children;

      for (var j = 0; j < dChildren.length; j++) {
        dChildren[j].disabled = dChildren[j].disabled === true ? false : true;
      }
    } else {
      children[i].disabled = children[i].disabled === true ? false : true;
    }
  }
}