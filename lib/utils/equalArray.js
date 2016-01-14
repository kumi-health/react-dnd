"use strict";

exports.__esModule = true;
exports["default"] = equalArray;

function equalArray(arrA, arrB) {

  if (arrA.length != arrB.length) {
    return false;
  }

  arrA = arrA.slice(0).sort();
  arrB = arrB.slice(0).sort();

  for (var i = 0; i < arrA.length; ++i) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

module.exports = exports["default"];