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

var _baseHookmodule = _interopRequireDefault(require("./logic/coursesScrollHook/base-hookmodule.js"));

var _Box = _interopRequireDefault(require("../Box"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _CardCourseHomepage = _interopRequireDefault(require("../Card - Course Homepage"));

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
  var rs = report(null, '17c8fdc0b7414c88a003308a', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-courses-cards",
    variants: b.getVariants(undefined),
    container: true,
    sx: {
      mb: 3
    },
    direction: 'column',
    item: true,
    xs: 12,
    "data-d": getKey(rs, '17ca86a986814c88a0033061')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-69",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17ca86a986814c88a0033062')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-71",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17ca86a986814c88a0033063')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-15",
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
    "data-d": getKey(rs, '17ca86a986814c88a0033064')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-51",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Courses',
    tag: 'span',
    "data-d": getKey(rs, '17ca86a986814c88a0033065')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-100",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17ca86a986814c88a0033066')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-25",
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
    "data-d": getKey(rs, '17ca86a986814c88a0033067')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-59",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'SEE MORE',
    "data-d": getKey(rs, '17ca86a986814c88a0033068')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-101",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    "data-d": getKey(rs, '17ca86a986814c88a0033069')
  }, /*#__PURE__*/_react.default.createElement(_Hook.default, {
    key: "coursesScrollHook",
    variants: b.getVariants(undefined),
    hookModule: _baseHookmodule.default,
    arguments: [],
    "data-d": getKey(rs, '17ca86a986814c88a003306a')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, coursesScrollHookArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        coursesScrollHookArgs[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17ca86a986814c88a003306a', '1791eb63ceefae252001b80a', coursesScrollHookArgs, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-139",
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
        "data-d": getKey(rs, '17ca86a986814c88a003306c')
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-102",
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
        "data-d": getKey(rs, '17ca86a986814c88a003306d')
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-22",
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
            return b.propertyBind(coursesScrollHookArgs, ['0', 'current']).scrollLeft -= 325;
          };
        }),
        "data-d": getKey(rs, '17ca86a986814c88a003306e')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-19",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        "data-d": getKey(rs, '17ca86a986814c88a003306f')
      }, 'chevron_left'))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-118",
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
        "data-d": getKey(rs, '17ca86a986814c88a0033070')
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "providerScroll-1",
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
          return b.propertyBind(coursesScrollHookArgs, ['0']);
        }),
        "data-d": getKey(rs, '17ca86a986814c88a0033071')
      }, /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-1",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872a05514c88a0033082')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-10",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872b5d414c88a003308b')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-9",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872b4e114c88a003308a')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-8",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872b36b14c88a0033089')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-7",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872b23814c88a0033088')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-6",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872b13114c88a0033087')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-5",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872aff114c88a0033086')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-4",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872aef114c88a0033085')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-3",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872adf014c88a0033084')
      }), /*#__PURE__*/_react.default.createElement(_CardCourseHomepage.default, {
        key: "card-course-homepage-2",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca872acf114c88a0033083')
      }), /*#__PURE__*/_react.default.createElement(_CardHomepageEndCard.default, {
        key: "card-provider-homepage-end-card-5",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17ca86a986814c88a003307d')
      }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
        key: "grid-119",
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
        "data-d": getKey(rs, '17ca86a986814c88a003307e')
      }, /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-23",
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
            return b.propertyBind(coursesScrollHookArgs, ['0', 'current']).scrollLeft += 325;
          };
        }),
        "data-d": getKey(rs, '17ca86a986814c88a003307f')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-20",
        variants: b.getVariants(undefined),
        sx: {
          color: 'grey.800'
        },
        fontSize: '',
        "data-d": getKey(rs, '17ca86a986814c88a0033080')
      }, 'chevron_right'))))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, coursesScrollHookArgs) : renderFn;
    };
  }(rs, variables))))];
};

exports.default = _default;
;