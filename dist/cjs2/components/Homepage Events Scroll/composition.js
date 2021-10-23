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

var _baseHookmodule = _interopRequireDefault(require("./logic/eventsScrollHook/base-hookmodule.js"));

var _Box = _interopRequireDefault(require("../Box"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _CardEventHomepage = _interopRequireDefault(require("../Card - Event Homepage"));

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
  var rs = report(null, '17c9ae2c03f14c88a0033001', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-events-cards",
    variants: b.getVariants(undefined),
    container: true,
    sx: {
      mb: 3
    },
    direction: 'column',
    "data-d": getKey(rs, '17c99ff417114c88a00330e7')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-42",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17c99ff417114c88a00330e8')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-98",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c99ff417114c88a00330ec')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-6",
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
    "data-d": getKey(rs, '17c99ff417114c88a00330ed')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-46",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Events',
    tag: 'span',
    "data-d": getKey(rs, '17c99ff417114c88a00330ee')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-97",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c99ff417114c88a00330e9')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-24",
    variants: b.getVariants(undefined),
    gutterBottom: false,
    variant: 'subtitle2',
    sx: {
      fontWeight: '600',
      ':hover': {
        color: 'primary.dark'
      },
      color: 'primary.main'
    },
    "data-d": getKey(rs, '17c99ff417114c88a00330ea')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-58",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'SEE MORE',
    "data-d": getKey(rs, '17c99ff417114c88a00330eb')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-99",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    "data-d": getKey(rs, '17c99ff417114c88a00330ef')
  }, /*#__PURE__*/_react.default.createElement(_Hook.default, {
    key: "eventsScrollHook",
    variants: b.getVariants(undefined),
    hookModule: _baseHookmodule.default,
    arguments: [],
    "data-d": getKey(rs, '17c9ae2c03f14c88a0033002')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, eventsScrollHookArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        eventsScrollHookArgs[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c9ae2c03f14c88a0033002', '1791eb63ceefae252001b80a', eventsScrollHookArgs, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-26",
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
        "data-d": getKey(rs, '17c9ae2c03f14c88a0033003')
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-33",
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
            return b.propertyBind(eventsScrollHookArgs, ['0', 'current']).scrollLeft -= 325;
          };
        }),
        "data-d": getKey(rs, '17c9ae2c04014c88a0033012')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-17",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        "data-d": getKey(rs, '17c9ae2c04014c88a0033013')
      }, 'chevron_left')), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-70",
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
        "data-d": getKey(rs, '17c9ae2c03f14c88a0033004')
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "eventsScroll",
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
          return b.propertyBind(eventsScrollHookArgs, ['0']);
        }),
        "data-d": getKey(rs, '17c9ae2c03f14c88a0033005')
      }, /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-1",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae518c314c88a003304c')
      }), /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-8",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae5444314c88a0033053')
      }), /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-7",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae5433414c88a0033052')
      }), /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-6",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae5425e14c88a0033051')
      }), /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-5",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae5416314c88a0033050')
      }), /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-4",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae5407414c88a003304f')
      }), /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-3",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae53f7414c88a003304e')
      }), /*#__PURE__*/_react.default.createElement(_CardEventHomepage.default, {
        key: "card-event-homepage-2",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae53e5814c88a003304d')
      }), /*#__PURE__*/_react.default.createElement(_CardHomepageEndCard.default, {
        key: "card-provider-homepage-end-card-4",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae2c03f14c88a0033006')
      }))), /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-34",
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
            return b.propertyBind(eventsScrollHookArgs, ['0', 'current']).scrollLeft += 325;
          };
        }),
        "data-d": getKey(rs, '17c9ae2c04014c88a0033014')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-18",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        "data-d": getKey(rs, '17c9ae2c04014c88a0033015')
      }, 'chevron_right')))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, eventsScrollHookArgs) : renderFn;
    };
  }(rs, variables))))];
};

exports.default = _default;
;