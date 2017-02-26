"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getItemAtIndex = function getItemAtIndex() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$LIST = _ref.LIST,
      LIST = _ref$LIST === undefined ? [] : _ref$LIST,
      _ref$INDEX = _ref.INDEX,
      INDEX = _ref$INDEX === undefined ? 0 : _ref$INDEX;

  return { ITEM: LIST[INDEX] };
};

exports.default = getItemAtIndex;