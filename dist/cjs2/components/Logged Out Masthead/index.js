"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = LoggedOutMasthead;

var _react = _interopRequireDefault(require("react"));

var _composition = _interopRequireDefault(require("./composition"));

function LoggedOutMasthead(props) {
  var composition = (0, _composition.default)(props);
  return composition || null;
}