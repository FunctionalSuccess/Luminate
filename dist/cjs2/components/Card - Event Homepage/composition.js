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
  var rs = report(null, '17c9ae4f83314c88a0033021', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Card.default, {
    key: "card-13",
    variants: b.getVariants(undefined),
    sx: {
      width: 300,
      height: 450
    },
    raised: true,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033022')
  }, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, {
    key: "card-action-area-5",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c9ae4f83314c88a003302e')
  }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    key: "card-media-11",
    variants: b.getVariants(undefined),
    image: 'https://humandesignconference.com/wp-content/uploads/2020/09/HDConference_Logo-1.png',
    component: 'img',
    sx: {
      maxHeight: 150,
      objectFit: 'contain'
    },
    "data-d": getKey(rs, '17c9ae4f83414c88a0033047')
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    key: "card-content-14",
    variants: b.getVariants(undefined),
    sx: {
      height: 254
    },
    "data-d": getKey(rs, '17c9ae4f83314c88a003302f')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-105",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'column',
    alignItems: 'flex-start',
    rowSpacing: 1.5,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033030')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-106",
    variants: b.getVariants(undefined),
    direction: 'column',
    container: true,
    item: true,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033031')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-107",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033032')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-26",
    variants: b.getVariants(undefined),
    sx: {
      pb: 0.5,
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 1.25
    },
    "data-d": getKey(rs, '17c9ae4f83314c88a0033033')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-75",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Human Design Conference',
    "data-d": getKey(rs, '17c9ae4f83314c88a0033034')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-112",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    direction: 'column',
    "data-d": getKey(rs, '17c9ae4f83414c88a003303c')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-113",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c9ae4f83414c88a003303d')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-27",
    variants: b.getVariants(undefined),
    variant: 'subtitle2',
    sx: {
      color: 'grey.700',
      pb: 1
    },
    "data-d": getKey(rs, '17c9ae4f83414c88a003303e')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-76",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Quantum Human Design™',
    "data-d": getKey(rs, '17c9ae4f83414c88a003303f')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-117",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    "data-d": getKey(rs, '17c9aee99a514c88a003305d')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-29",
    variants: b.getVariants(undefined),
    variant: 'body2',
    sx: {
      color: 'grey.700',
      pb: 1
    },
    "data-d": getKey(rs, '17c9aee99a514c88a003305f')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-78",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: '10/19/21 - 10/20/21',
    "data-d": getKey(rs, '17c9aee99a514c88a0033060')
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-114",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c9ae4f83414c88a0033040')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-28",
    variants: b.getVariants(undefined),
    variant: 'subtitle2',
    sx: {
      pb: 1,
      fontWeight: 700
    },
    "data-d": getKey(rs, '17c9ae4f83414c88a0033041')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-77",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: '$365',
    "data-d": getKey(rs, '17c9ae4f83414c88a0033042')
  }))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-108",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'row',
    spacing: undefined,
    justifyContent: 'space-between',
    alignItems: 'center',
    rowSpacing: 1,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033035')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-109",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033036')
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: "chip-5",
    variants: b.getVariants(undefined),
    label: 'Human Design',
    size: 'small',
    color: undefined,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033037')
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-111",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c9ae4f83414c88a003303a')
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: "chip-7",
    variants: b.getVariants(undefined),
    label: '2 Days',
    size: 'small',
    color: undefined,
    "data-d": getKey(rs, '17c9ae4f83414c88a003303b')
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-110",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033038')
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: "chip-6",
    variants: b.getVariants(undefined),
    label: 'In Person',
    size: 'small',
    color: undefined,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033039')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-115",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'column',
    rowGap: 1,
    sx: {
      height: undefined
    },
    item: true,
    "data-d": getKey(rs, '17c9ae4f83414c88a0033043')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-116",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c9ae4f83414c88a0033044')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-54",
    variants: b.getVariants(undefined),
    variant: 'body2',
    "data-d": getKey(rs, '17c9ae4f83414c88a0033045')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-111",
    variants: b.getVariants(undefined),
    className: b.mClassnames([b.getUniqueClassName(), _stylesModule.default['clutchClass12071']]),
    style: undefined,
    text: 'Dig into the history and story of Human Design and begin exploring how Human Design can help us interpret our future and lay the foundation for building an equitable, sustainable and peaceful future.',
    tag: 'p',
    "data-d": getKey(rs, '17c9ae4f83414c88a0033046')
  }))))))), /*#__PURE__*/_react.default.createElement(_CardActions.default, {
    key: "card-actions-12",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c9ae4f83314c88a0033023')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-103",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033024')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-104",
    variants: b.getVariants(undefined),
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17c9ae4f83314c88a0033025')
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    key: "box-35",
    variants: b.getVariants(undefined),
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    "data-d": getKey(rs, '17c9ae4f83314c88a0033026')
  }, /*#__PURE__*/_react.default.createElement(_State.default, {
    key: "number-state-12",
    variants: b.getVariants(undefined),
    initialValue: 4.65,
    "data-d": getKey(rs, '17c9ae4f83314c88a0033027')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, numberstate12Args = new Array(_len), _key = 0; _key < _len; _key++) {
        numberstate12Args[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c9ae4f83314c88a0033027', '178bf970a34fae252001bf06', numberstate12Args, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Rating.default, {
        key: "rating-12",
        variants: b.getVariants(undefined),
        size: 'small',
        readOnly: true,
        value: 4.65,
        precision: 0.25,
        "data-d": getKey(rs, '17c9ae4f83314c88a0033028')
      }), /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-36",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c9ae4f83314c88a0033029')
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        key: "typography-53",
        variants: b.getVariants(undefined),
        variant: 'caption',
        sx: {
          fontSize: '11px',
          pl: 0.5
        },
        "data-d": getKey(rs, '17c9ae4f83314c88a003302a')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-109",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: b.tryCatch(function () {
          return '(' + b.propertyBind(numberstate12Args, ['0', 'state']) + ')';
        }),
        tag: false,
        "data-d": getKey(rs, '17c9ae4f83314c88a003302b')
      })))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, numberstate12Args) : renderFn;
    };
  }(rs, variables))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "button-24",
    variants: b.getVariants(undefined),
    variant: 'text',
    size: 'small',
    "data-d": getKey(rs, '17c9ae4f83314c88a003302c')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-110",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: {
      textTransform: 'capitalize'
    },
    text: 'Learn More',
    tag: 'span',
    "data-d": getKey(rs, '17c9ae4f83314c88a003302d')
  }))))))];
};

exports.default = _default;
;