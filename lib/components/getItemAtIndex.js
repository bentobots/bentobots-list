"use strict";

var getItemAtIndex = function getItemAtIndex() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$LIST = _ref.LIST,
      LIST = _ref$LIST === undefined ? function () {
    return [];
  } : _ref$LIST,
      _ref$INDEX = _ref.INDEX,
      INDEX = _ref$INDEX === undefined ? function () {
    return 0;
  } : _ref$INDEX;

  return { ITEM: LIST()[INDEX()] };
};

module.exports = { getItemAtIndex: getItemAtIndex };