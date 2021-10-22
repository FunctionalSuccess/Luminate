"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function Spotify(props) {
  var url = new URL(props.link);
  return /*#__PURE__*/_react.default.createElement("iframe", {
    src: "https://open.spotify.com/embed-podcast" + url.pathname,
    width: props.width,
    height: props.height,
    frameborder: "0",
    allowtransparency: "true",
    allow: "encrypted-media"
  });
}

var _default = Spotify;
exports.default = _default;