'use strict';

var _getItemAtIndex = require('./getItemAtIndex');

it('works without LIST', function () {
  var result = (0, _getItemAtIndex.getItemAtIndex)({ INDEX: function INDEX() {
      return 1;
    } });
  expect(result).toEqual({ ITEM: undefined });
});

it('works without INDEX', function () {
  var result = (0, _getItemAtIndex.getItemAtIndex)({ LIST: function LIST() {
      return [1, 2, 3];
    } });
  expect(result).toEqual({ ITEM: 1 });
});

it('gets item at INDEX', function () {
  var result = (0, _getItemAtIndex.getItemAtIndex)({ LIST: function LIST() {
      return [1, 2, 3];
    }, INDEX: function INDEX() {
      return 1;
    } });
  expect(result).toEqual({ ITEM: 2 });
});

it('returns undefined if INDEX out of bounds', function () {
  var result = (0, _getItemAtIndex.getItemAtIndex)({ LIST: function LIST() {
      return [1, 2, 3];
    }, INDEX: function INDEX() {
      return 5;
    } });
  expect(result).toEqual({ ITEM: undefined });
});