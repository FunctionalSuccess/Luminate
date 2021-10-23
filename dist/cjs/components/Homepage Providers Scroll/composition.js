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

var _baseHookmodule = _interopRequireDefault(require("./logic/providerScrollHook/base-hookmodule.js"));

var _Box = _interopRequireDefault(require("../Box"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _CardProviderHomepage = _interopRequireDefault(require("../Card - Provider Homepage"));

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
  var rs = report(null, '17c851f2b2f14c88a00330e1', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-providers-cards",
    variants: b.getVariants(undefined),
    container: true,
    sx: {
      mb: 3
    },
    direction: 'column',
    item: true,
    xs: 12,
    "data-d": getKey(rs, '17c8062fbdc14c88a003300e')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-38",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17c900a477a14c88a00331ed')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-62",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c99d0ad3314c88a0033000')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-8",
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
    "data-d": getKey(rs, '17c9a0b3d7714c88a0033121')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-49",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Providers',
    tag: 'span',
    "data-d": getKey(rs, '17c9a0b3d7714c88a0033122')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-65",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c99d0f21a14c88a0033008')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-14",
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
    "data-d": getKey(rs, '17c99da687414c88a0033031')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-50",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'SEE MORE',
    "data-d": getKey(rs, '17c99da687414c88a0033032')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-39",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    "data-d": getKey(rs, '17c900a97c514c88a00331f5')
  }, /*#__PURE__*/_react.default.createElement(_Hook.default, {
    key: "providerScrollHook",
    variants: b.getVariants(undefined),
    hookModule: _baseHookmodule.default,
    arguments: [],
    "data-d": getKey(rs, '17c854e375114c88a00331c1')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, providerScrollHookArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        providerScrollHookArgs[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c854e375114c88a00331c1', '1791eb63ceefae252001b80a', providerScrollHookArgs, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-125",
        variants: b.getVariants(undefined),
        sx: {
          overflow: 'auto',
          display: 'flex',
          ml: {
            xs: -2,
            sm: -5,
            md: 0
          },
          mr: {
            xs: -2,
            sm: -5,
            md: 0
          }
        },
        "data-d": getKey(rs, '17ca49703fe14c88a00330fa')
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-40",
        variants: b.getVariants(undefined),
        sx: {
          width: '36px',
          display: {
            xs: 'none',
            md: 'flex'
          }
        },
        item: true,
        container: true,
        "data-d": getKey(rs, '17ca44c7c9414c88a0033073')
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-9",
        variants: b.getVariants(undefined),
        sx: {
          width: 36,
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
            return b.propertyBind(providerScrollHookArgs, ['0', 'current']).scrollLeft -= 325;
          };
        }),
        "data-d": getKey(rs, '17c860c51d114c88a003300c')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-5",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        "data-d": getKey(rs, '17c860f209d14c88a0033029')
      }, 'chevron_left'))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-7",
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
        item: true,
        container: true,
        "data-d": getKey(rs, '17c8607e0df14c88a0033001')
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "providerScroll",
        variants: b.getVariants(undefined),
        container: true,
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
          return b.propertyBind(providerScrollHookArgs, ['0']);
        }),
        "data-d": getKey(rs, '17c8162212414c88a00330fd')
      }, /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-1",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c8677035014c88a0033320')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-12",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c86776c8714c88a003332b')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-11",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c86775c8c14c88a003332a')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-10",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c867755ad14c88a0033329')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-9",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c8677546c14c88a0033328')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-8",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c867752a414c88a0033327')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-7",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c8677515414c88a0033326')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-6",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c8677502714c88a0033325')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-5",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c86774ee414c88a0033324')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-4",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c86774d8414c88a0033323')
      }), /*#__PURE__*/_react.default.createElement(_CardProviderHomepage.default, {
        key: "card-provider-homepage-3",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c86774be514c88a0033322')
      }), /*#__PURE__*/_react.default.createElement(_CardHomepageEndCard.default, {
        key: "card-provider-homepage-end-card-1",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c8fc76e0314c88a0033029')
      }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-41",
        variants: b.getVariants(undefined),
        sx: {
          width: '36px',
          display: {
            xs: 'none',
            md: 'flex'
          }
        },
        item: true,
        container: true,
        "data-d": getKey(rs, '17ca45175df14c88a0033099')
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-10",
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
            return b.propertyBind(providerScrollHookArgs, ['0', 'current']).scrollLeft += 325;
          };
        }),
        "data-d": getKey(rs, '17c861f407d14c88a003309f')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-6",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        fontSize: '',
        "data-d": getKey(rs, '17c861f407d14c88a00330a0')
      }, 'chevron_right'))))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, providerScrollHookArgs) : renderFn;
    };
  }(rs, variables))))];
};

exports.default = _default;
;