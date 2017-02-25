'use strict';

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('creates a list with values', function () {
  var result = (0, _create2.default)({ ITEM9: 'nine', ITEM0: 0, ITEM1: 'ONE', ITEM14: 14.4, ITEM102: 102 });
  expect(result).toEqual({ LIST: [0, 'ONE', 'nine', 14.4, 102] });
});

it('creates a list with no values', function () {
  var result = (0, _create2.default)();
  expect(result).toEqual({ LIST: [] });
});