"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var create = function create() {
  var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = Object.keys(inputs)
  // extract numbers from "ITEM${NUMBER}"
  .map(function (k) {
    return k.match(/\d+$/)[0];
  })
  // sort 'naturally'
  .sort(function (a, b) {
    return a - b;
  })
  // return input values in correct order
  .map(function (sorted) {
    return inputs["ITEM" + sorted]();
  });

  return { LIST: list };
};

exports.default = create;