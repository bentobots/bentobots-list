'use strict';

var _create = require('./create');

it('creates a list with values', function () {
  var result = (0, _create.create)({ ITEM9: function ITEM9() {
      return 'nine';
    }, ITEM0: function ITEM0() {
      return 0;
    }, ITEM1: function ITEM1() {
      return 'ONE';
    }, ITEM14: function ITEM14() {
      return 14.4;
    }, ITEM102: function ITEM102() {
      return 102;
    } });
  expect(result).toEqual({ LIST: [0, 'ONE', 'nine', 14.4, 102] });
});

it('creates a list with no values', function () {
  var result = (0, _create.create)();
  expect(result).toEqual({ LIST: [] });
});