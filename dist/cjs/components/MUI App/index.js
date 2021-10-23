"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = MUIApp;

var _react = _interopRequireDefault(require("react"));

var _composition = _interopRequireDefault(require("./composition"));

function MUIApp(props) {
  var composition = (0, _composition.default)(props);
  return composition || null;
}