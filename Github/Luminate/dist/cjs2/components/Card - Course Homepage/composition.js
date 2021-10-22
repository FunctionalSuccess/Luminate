"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var b = _interopRequireWildcard(require("@clutch-creator/bridge"));

var _Card = _interopRequireDefault(require("../Card"));

var _CardActionArea = _interopRequireDefault(require("../Card Action Area"));

var _CardMedia = _interopRequireDefault(require("../Card Media"));

var _CardContent = _interopRequireDefault(require("../Card Content"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _Text = _interopRequireDefault(require("@clutch-marketplace/web-elements/dist/cjs/components/Text"));

var _Chip = _interopRequireDefault(require("../Chip"));

var _CardActions = _interopRequireDefault(require("../Card Actions"));

var _Box = _interopRequireDefault(require("../Box"));

var _State = _interopRequireDefault(require("@clutch-marketplace/logic/dist/cjs/components/State"));

var _Rating = _interopRequireDefault(require("../Rating"));

var _Button = _interopRequireDefault(require("../Button"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

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
  var rs = report(null, '17c8fde8a0714c88a00330ae', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Card.default, {
    key: "card-11",
    variants: b.getVariants(undefined),
    sx: {
      width: 300,
      height: 450
    },
    raised: true,
    "data-d": getKey(rs, '17c8fde8a0714c88a00330af')
  }, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, {
    key: "card-action-area-3",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c8fde8a0714c88a00330bb')
  }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    key: "card-media-10",
    variants: b.getVariants(undefined),
    image: 'https://images.squarespace-cdn.com/content/v1/5a734c9af43b55b6cd5466a1/1542989568344-BVJ2RBYWUAMIDUF79HOJ/Inna+Shnayder+%40Inna.Shnayder-8+%283%29.jpg?format=300w',
    component: 'img',
    sx: {
      maxHeight: 150,
      objectFit: 'cover'
    },
    "data-d": getKey(rs, '17c8fde8a0714c88a00330c5')
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    key: "card-content-11",
    variants: b.getVariants(undefined),
    sx: {
      height: 254
    },
    "data-d": getKey(rs, '17c8fde8a0714c88a00330bc')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-27",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'column',
    alignItems: 'flex-start',
    rowSpacing: 1.5,
    "data-d": getKey(rs, '17c8fde8a0714c88a00330bd')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-29",
    variants: b.getVariants(undefined),
    direction: 'column',
    container: true,
    item: true,
    "data-d": getKey(rs, '17c8fde8a0714c88a00330c0')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-18",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c8fe40e6e14c88a00330e8')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-12",
    variants: b.getVariants(undefined),
    sx: {
      pb: 0.5,
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 1.25
    },
    "data-d": getKey(rs, '17c8fde8a0714c88a00330c1')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-48",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Flow Workshop',
    "data-d": getKey(rs, '17c8fde8a0714c88a00330c2')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-35",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    "data-d": getKey(rs, '17c8fe9188714c88a0033105')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-19",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c8ffccdaa14c88a0033197')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-16",
    variants: b.getVariants(undefined),
    variant: 'subtitle2',
    sx: {
      color: 'grey.700',
      pb: 1
    },
    "data-d": getKey(rs, '17c8fe9188714c88a0033106')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-61",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Erin Claire Jones',
    "data-d": getKey(rs, '17c8fe9188714c88a0033107')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-34",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c8ffd319414c88a003319f')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-17",
    variants: b.getVariants(undefined),
    variant: 'subtitle2',
    sx: {
      pb: 1,
      fontWeight: 700
    },
    "data-d": getKey(rs, '17c8ffd319414c88a00331a0')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-62",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: '$195',
    "data-d": getKey(rs, '17c8ffd319414c88a00331a1')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-30",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'row',
    spacing: undefined,
    justifyContent: 'space-between',
    alignItems: 'center',
    rowSpacing: 1,
    "data-d": getKey(rs, '17c8fe492f714c88a00330f1')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-28",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c8ff4d7e414c88a0033157')
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: "chip-1",
    variants: b.getVariants(undefined),
    label: 'Human Design',
    size: 'small',
    color: undefined,
    "data-d": getKey(rs, '17c8fecc51e14c88a0033111')
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-37",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c8ff52adf14c88a0033162')
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: "chip-4",
    variants: b.getVariants(undefined),
    label: '8 Weeks',
    size: 'small',
    color: undefined,
    "data-d": getKey(rs, '17c8ff2f11614c88a003313e')
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-36",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c8ff5287d14c88a0033161')
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: "chip-3",
    variants: b.getVariants(undefined),
    label: 'Virtual',
    size: 'small',
    color: undefined,
    "data-d": getKey(rs, '17c8ff2ea7614c88a003313d')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-23",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'column',
    rowGap: 1,
    sx: {
      height: undefined
    },
    item: true,
    "data-d": getKey(rs, '17c8fde8a0714c88a00330c7')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-58",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c8fde8a0714c88a00330c8')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-50",
    variants: b.getVariants(undefined),
    variant: 'body2',
    "data-d": getKey(rs, '17c8fde8a0714c88a00330c9')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-105",
    variants: b.getVariants(undefined),
    className: b.mClassnames([b.getUniqueClassName(), _stylesModule.default['clutchClass12055']]),
    style: undefined,
    text: 'A fun, interactive group workshop that teaches you how to identify how and where you are out of alignment and access the tools you need to find your flow.',
    tag: 'p',
    "data-d": getKey(rs, '17c8fde8a0714c88a00330ca')
  }))))))), /*#__PURE__*/_react.default.createElement(_CardActions.default, {
    key: "card-actions-10",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c8fde8a0714c88a00330b0')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-54",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c8fde8a0714c88a00330b1')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-55",
    variants: b.getVariants(undefined),
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17c8fde8a0714c88a00330b2')
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    key: "box-29",
    variants: b.getVariants(undefined),
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    "data-d": getKey(rs, '17c8fde8a0714c88a00330b3')
  }, /*#__PURE__*/_react.default.createElement(_State.default, {
    key: "number-state-10",
    variants: b.getVariants(undefined),
    initialValue: 4.65,
    "data-d": getKey(rs, '17c8fde8a0714c88a00330b4')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, numberstate10Args = new Array(_len), _key = 0; _key < _len; _key++) {
        numberstate10Args[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c8fde8a0714c88a00330b4', '178bf970a34fae252001bf06', numberstate10Args, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Rating.default, {
        key: "rating-10",
        variants: b.getVariants(undefined),
        size: 'small',
        readOnly: true,
        value: 4.65,
        precision: 0.25,
        "data-d": getKey(rs, '17c8fde8a0714c88a00330b5')
      }), /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-30",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c8fde8a0714c88a00330b6')
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        key: "typography-48",
        variants: b.getVariants(undefined),
        variant: 'caption',
        sx: {
          fontSize: '11px',
          pl: 0.5
        },
        "data-d": getKey(rs, '17c8fde8a0714c88a00330b7')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-102",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: b.tryCatch(function () {
          return '(' + b.propertyBind(numberstate10Args, ['0', 'state']) + ')';
        }),
        tag: false,
        "data-d": getKey(rs, '17c8fde8a0714c88a00330b8')
      })))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, numberstate10Args) : renderFn;
    };
  }(rs, variables))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "button-22",
    variants: b.getVariants(undefined),
    variant: 'text',
    size: 'small',
    "data-d": getKey(rs, '17c8fde8a0714c88a00330b9')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-103",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: {
      textTransform: 'capitalize'
    },
    text: 'Learn More',
    tag: 'span',
    "data-d": getKey(rs, '17c8fde8a0714c88a00330ba')
  }))))))];
};

exports.default = _default;
;