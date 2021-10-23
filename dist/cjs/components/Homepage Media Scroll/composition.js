"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var b = _interopRequireWildcard(require("@clutch-creator/bridge"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _Text = _interopRequireDefault(require("@clutch-marketplace/web-elements/dist/cjs/components/Text"));

var _Hook = _interopRequireDefault(require("@clutch-marketplace/logic/dist/cjs/components/Hook"));

var _baseHookmodule = _interopRequireDefault(require("./logic/mediaScrollHook/base-hookmodule.js"));

var _Box = _interopRequireDefault(require("../Box"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _CardMediaHomepage = _interopRequireDefault(require("../Card - Media Homepage"));

var _CardHomepageEndCard = _interopRequireDefault(require("../Card - Homepage End Card"));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var _default = function _default(props) {
  var _b$useReport = b.useReport(props),
      report = _b$useReport[0],
      getKey = _b$useReport[1];

  var variants = props.variants;
  var variables = {};
  var rs = report(null, '17c901642bb14c88a0033242', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-media-cards",
    variants: b.getVariants(undefined),
    container: true,
    sx: {
      mb: 3
    },
    direction: 'column',
    "data-d": getKey(rs, '17c9015809214c88a0033239')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-72",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17c99fe8ddb14c88a00330df')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-96",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c99fe8ddb14c88a00330e3')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-7",
    variants: b.getVariants(undefined),
    gutterBottom: false,
    variant: 'h5',
    sx: {
      fontWeight: '500',
      color: 'primary.main',
      fontSize: '1.75rem',
      lineHeight: {
        xs: '1.5',
        md: '1.75'
      }
    },
    "data-d": getKey(rs, '17c9a09d4a714c88a003311a')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-47",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Media',
    tag: 'span',
    "data-d": getKey(rs, '17c9a09d4a714c88a003311b')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-73",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c99fe8ddb14c88a00330e0')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-23",
    variants: b.getVariants(undefined),
    gutterBottom: false,
    variant: 'subtitle2',
    sx: {
      fontWeight: '500',
      ':hover': {
        color: 'primary.dark'
      },
      color: 'primary.main'
    },
    "data-d": getKey(rs, '17c99fe8ddb14c88a00330e1')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-57",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'SEE MORE',
    "data-d": getKey(rs, '17c99fe8ddb14c88a00330e2')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-43",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    "data-d": getKey(rs, '17c9015809314c88a003323d')
  }, /*#__PURE__*/_react.default.createElement(_Hook.default, {
    key: "mediaScrollHook",
    variants: b.getVariants(undefined),
    hookModule: _baseHookmodule.default,
    arguments: [],
    "data-d": getKey(rs, '17c901642bb14c88a0033243')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, mediaScrollHookArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        mediaScrollHookArgs[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c901642bb14c88a0033243', '1791eb63ceefae252001b80a', mediaScrollHookArgs, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-20",
        variants: b.getVariants(undefined),
        sx: {
          ml: {
            xs: -2,
            sm: -5,
            md: 0
          },
          mr: {
            xs: -2,
            sm: -5,
            md: 0
          },
          overflow: 'auto',
          display: 'flex'
        },
        "data-d": getKey(rs, '17c901642bb14c88a0033244')
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-14",
        variants: b.getVariants(undefined),
        sx: {
          width: 100,
          backgroundColor: 'rgba(224, 224, 224, 0.7)',
          borderRadius: 1,
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems: 'center',
          justifyContent: 'center',
          'z-index': '100',
          mb: '5px'
        },
        onClick: b.tryCatch(function () {
          return function () {
            return b.propertyBind(mediaScrollHookArgs, ['0', 'current']).scrollLeft -= 325;
          };
        }),
        "data-d": getKey(rs, '17c901642bb14c88a0033253')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-14",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        "data-d": getKey(rs, '17c901642bb14c88a0033254')
      }, 'chevron_left')), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-44",
        variants: b.getVariants(undefined),
        display: 'grid',
        sx: {
          ml: {
            xs: 0,
            md: -4
          },
          mr: {
            xs: 0,
            md: -4
          }
        },
        "data-d": getKey(rs, '17c901642bb14c88a0033245')
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "courseScroll-2",
        variants: b.getVariants(undefined),
        container: false,
        sx: {
          display: 'grid',
          'grid-gap': '20px',
          'overflow-x': 'scroll',
          'scroll-snap-type': 'x proximity',
          'grid-auto-flow': 'column',
          'grid-auto-columns': undefined,
          p: {
            xs: '10px 15px 20px 15px',
            md: '10px 0px 20px 40px'
          },
          '::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scroll-behavior': 'smooth',
          'grid-auto-rows': 'auto'
        },
        ref: b.tryCatch(function () {
          return b.propertyBind(mediaScrollHookArgs, ['0']);
        }),
        "data-d": getKey(rs, '17c901642bb14c88a0033246')
      }, /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-1",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901e7ed414c88a00332af')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-11",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ed20614c88a00332b9')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-10",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ecf0114c88a00332b8')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-9",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ecdf214c88a00332b7')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-8",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ecb8914c88a00332b6')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-7",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ec9f614c88a00332b5')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-6",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ec96314c88a00332b4')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-5",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ec84914c88a00332b3')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-4",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ec76914c88a00332b2')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-3",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ec67a14c88a00332b1')
      }), /*#__PURE__*/_react.default.createElement(_CardMediaHomepage.default, {
        key: "card-media-homepage-2",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901ec52b14c88a00332b0')
      }), /*#__PURE__*/_react.default.createElement(_CardHomepageEndCard.default, {
        key: "card-provider-homepage-end-card-3",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901642bb14c88a0033247')
      }))), /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-15",
        variants: b.getVariants(undefined),
        sx: {
          width: 100,
          backgroundColor: 'rgba(224, 224, 224, 0.7)',
          borderRadius: 1,
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems: 'center',
          justifyContent: 'center',
          'z-index': '100',
          mb: '5px'
        },
        onClick: b.tryCatch(function () {
          return function () {
            return b.propertyBind(mediaScrollHookArgs, ['0', 'current']).scrollLeft += 325;
          };
        }),
        "data-d": getKey(rs, '17c901642bc14c88a0033256')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-15",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        fontSize: '',
        "data-d": getKey(rs, '17c901642bc14c88a0033257')
      }, 'chevron_right')))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, mediaScrollHookArgs) : renderFn;
    };
  }(rs, variables))))];
};

exports.default = _default;
;