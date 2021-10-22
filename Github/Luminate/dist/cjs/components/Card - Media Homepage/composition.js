"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var b = _interopRequireWildcard(require("@clutch-creator/bridge"));

var _Card = _interopRequireDefault(require("../Card"));

var _SpotifyPodcastEmbed = _interopRequireDefault(require("../Spotify Podcast Embed"));

var _CardMedia = _interopRequireDefault(require("../Card Media"));

var _CardActionArea = _interopRequireDefault(require("../Card Action Area"));

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
  var rs = report(null, '17c901e62fe14c88a0033284', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Card.default, {
    key: "card-12",
    variants: b.getVariants(undefined),
    sx: {
      width: 300,
      height: 450
    },
    raised: true,
    "data-d": getKey(rs, '17c901e62fe14c88a0033285')
  }, /*#__PURE__*/_react.default.createElement(_SpotifyPodcastEmbed.default, {
    key: "spotify-embed-1",
    variants: b.getVariants(undefined),
    link: 'https://open.spotify.com/show/3k2fpuQecYQBUr7zTgSNdZ?si=8f71aa392b194f16',
    width: '100%',
    height: 155,
    "data-d": getKey(rs, '17c902c322514c88a00332d5')
  }), false ? /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    key: "card-media-12",
    variants: b.getVariants(undefined),
    image: 'https://images.squarespace-cdn.com/content/v1/5a734c9af43b55b6cd5466a1/1542989568344-BVJ2RBYWUAMIDUF79HOJ/Inna+Shnayder+%40Inna.Shnayder-8+%283%29.jpg?format=300w',
    component: 'img',
    sx: {
      maxHeight: 155
    },
    "data-d": getKey(rs, '17c941faf1b14c88a0033000')
  }) : null, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, {
    key: "card-action-area-4",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c901e62ff14c88a0033291')
  }, /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    key: "card-content-13",
    variants: b.getVariants(undefined),
    sx: {
      height: 245
    },
    "data-d": getKey(rs, '17c901e62ff14c88a0033292')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-45",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'column',
    alignItems: 'flex-start',
    rowSpacing: 1.5,
    "data-d": getKey(rs, '17c901e62ff14c88a0033293')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-46",
    variants: b.getVariants(undefined),
    direction: 'column',
    container: true,
    item: true,
    justifyContent: 'flex-start',
    "data-d": getKey(rs, '17c901e62ff14c88a0033294')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-47",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c901e62ff14c88a0033295')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-13",
    variants: b.getVariants(undefined),
    sx: {
      pb: 0.5,
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 1.25
    },
    "data-d": getKey(rs, '17c901e62ff14c88a0033296')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-60",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'DayLuna Human Design Podcast',
    "data-d": getKey(rs, '17c901e62ff14c88a0033297')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-63",
    variants: b.getVariants(undefined),
    item: true,
    container: true,
    justifyContent: 'space-between',
    "data-d": getKey(rs, '17c901e62ff14c88a003329f')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-64",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c901e62ff14c88a00332a0')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-18",
    variants: b.getVariants(undefined),
    variant: 'subtitle2',
    sx: {
      color: 'grey.700',
      pb: 1
    },
    "data-d": getKey(rs, '17c901e62ff14c88a00332a1')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-63",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'DayLuna',
    "data-d": getKey(rs, '17c901e62ff14c88a00332a2')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-48",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'row',
    spacing: undefined,
    justifyContent: 'space-between',
    alignItems: 'center',
    rowSpacing: 1,
    "data-d": getKey(rs, '17c901e62ff14c88a0033298')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-49",
    variants: b.getVariants(undefined),
    item: true,
    "data-d": getKey(rs, '17c901e62ff14c88a0033299')
  }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
    key: "chip-2",
    variants: b.getVariants(undefined),
    label: 'Human Design',
    size: 'small',
    color: undefined,
    "data-d": getKey(rs, '17c901e62ff14c88a003329a')
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-66",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'column',
    item: true,
    "data-d": getKey(rs, '17c901e62ff14c88a00332a6')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-67",
    variants: b.getVariants(undefined),
    container: true,
    item: true,
    "data-d": getKey(rs, '17c901e62ff14c88a00332a7')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-52",
    variants: b.getVariants(undefined),
    variant: 'body2',
    "data-d": getKey(rs, '17c901e62ff14c88a00332a8')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-108",
    variants: b.getVariants(undefined),
    className: b.mClassnames([b.getUniqueClassName(), _stylesModule.default['clutchClass12062']]),
    text: 'We dive deep into Authorities, Strategies, Profiles and the New Paradigm as well as host live readings for special guests and get into the intricacies of parenting and so much more with Human Design. Discover how Human Design can transform your life and what you can start doing TODAY to start living in alignment.',
    tag: 'span',
    "data-d": getKey(rs, '17c901e62ff14c88a00332a9')
  }))))))), /*#__PURE__*/_react.default.createElement(_CardActions.default, {
    key: "card-actions-11",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c901e62fe14c88a0033286')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-59",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c901e62fe14c88a0033287')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-60",
    variants: b.getVariants(undefined),
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17c901e62fe14c88a0033288')
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    key: "box-31",
    variants: b.getVariants(undefined),
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    "data-d": getKey(rs, '17c901e62fe14c88a0033289')
  }, /*#__PURE__*/_react.default.createElement(_State.default, {
    key: "number-state-11",
    variants: b.getVariants(undefined),
    initialValue: 4.65,
    "data-d": getKey(rs, '17c901e62fe14c88a003328a')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, numberstate11Args = new Array(_len), _key = 0; _key < _len; _key++) {
        numberstate11Args[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c901e62fe14c88a003328a', '178bf970a34fae252001bf06', numberstate11Args, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Rating.default, {
        key: "rating-11",
        variants: b.getVariants(undefined),
        size: 'small',
        readOnly: true,
        value: 4.65,
        precision: 0.25,
        "data-d": getKey(rs, '17c901e62fe14c88a003328b')
      }), /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-32",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c901e62ff14c88a003328c')
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        key: "typography-51",
        variants: b.getVariants(undefined),
        variant: 'caption',
        sx: {
          fontSize: '11px',
          pl: 0.5
        },
        "data-d": getKey(rs, '17c901e62ff14c88a003328d')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-106",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: b.tryCatch(function () {
          return '(' + b.propertyBind(numberstate11Args, ['0', 'state']) + ')';
        }),
        tag: false,
        "data-d": getKey(rs, '17c901e62ff14c88a003328e')
      })))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, numberstate11Args) : renderFn;
    };
  }(rs, variables))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "button-23",
    variants: b.getVariants(undefined),
    variant: 'text',
    size: 'small',
    "data-d": getKey(rs, '17c901e62ff14c88a003328f')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-107",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: {
      textTransform: 'capitalize'
    },
    text: 'Learn More',
    tag: 'span',
    "data-d": getKey(rs, '17c901e62ff14c88a0033290')
  }))))))];
};

exports.default = _default;
;