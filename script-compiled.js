'use strict';

//Task 1

var first = 'Hello';
var second = 'Word';

var add = first + ' + ' + second;

//Task 2

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2';
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '5';
  return a * b;
};
var multiply1 = function multiply1() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '8';
  return x * 1;
};

//Task 3

var average = function average() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  return rest.reduce(function (a, b) {
    return a + b;
  }) / rest.length;
};
average(1);
average(1, 3);
average(1, 3, 6, 6);

//Task 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var average2 = function average2(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }) / arr.length;
};
average2(grades);

//Task 5

var arrayone = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = arrayone[2],
    lastname = arrayone[4];
