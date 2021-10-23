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

var _CardContent = _interopRequireDefault(require("../Card Content"));

var _Grid = _interopRequireDefault(require("../Grid"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _Text = _interopRequireDefault(require("@clutch-marketplace/web-elements/dist/cjs/components/Text"));

var _CardMedia = _interopRequireDefault(require("../Card Media"));

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
  var rs = report(null, '17c8677035014c88a003331d', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Card.default, {
    key: "card-9",
    variants: b.getVariants(undefined),
    sx: {
      width: 300,
      height: 450
    },
    raised: true,
    "data-d": getKey(rs, '17c8170acc814c88a0033304')
  }, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, {
    key: "card-action-area-1",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c86980aa314c88a003336c')
  }, /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    key: "card-content-10",
    variants: b.getVariants(undefined),
    sx: undefined,
    "data-d": getKey(rs, '17c86747c5a14c88a0033300')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-24",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'row',
    alignItems: 'center',
    "data-d": getKey(rs, '17c86747c5a14c88a0033302')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-25",
    variants: b.getVariants(undefined),
    sx: {
      mr: 2,
      width: 56,
      height: 56,
      borderRadius: '50%'
    },
    "data-d": getKey(rs, '17c86747c5a14c88a0033303')
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    key: "avatar-2",
    variants: b.getVariants(undefined),
    src: 'https://mzlzqjzvhavxetaoqwde.supabase.in/storage/v1/object/sign/profile-images/Erin Claire Jones.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlLWltYWdlcy9FcmluIENsYWlyZSBKb25lcy5qcGciLCJpYXQiOjE2MzI1MjMyNzksImV4cCI6MTk0Nzg4MzI3OX0.RxuZpRF8NZj8MPpFP5ngP6VGlInLonXuCmNaJh95P70',
    sx: {
      width: '56px',
      height: '56px'
    },
    variant: 'circular',
    imgProps: {
      width: 56,
      height: 56,
      sx: {
        borderRadius: '50%'
      }
    },
    "data-d": getKey(rs, '17c86747c5a14c88a0033304')
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-26",
    variants: b.getVariants(undefined),
    direction: 'column',
    "data-d": getKey(rs, '17c86747c5a14c88a0033305')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-9",
    variants: b.getVariants(undefined),
    sx: {
      pb: 0,
      fontSize: 18,
      fontWeight: '400'
    },
    "data-d": getKey(rs, '17c86747c5a14c88a0033306')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-4",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Erin Claire Jones',
    "data-d": getKey(rs, '17c86747c5a14c88a0033307')
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-11",
    variants: b.getVariants(undefined),
    variant: 'caption',
    sx: {
      color: 'grey.700'
    },
    "data-d": getKey(rs, '17c86747c5a14c88a0033308')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-44",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: 'Human Design Coach',
    "data-d": getKey(rs, '17c86747c5a14c88a0033309')
  }))))), /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    key: "card-media-9",
    variants: b.getVariants(undefined),
    image: 'https://www.lavendaire.com/wp-content/uploads/2020/05/Erin-Claire-Jones-1024x682.png',
    component: 'img',
    sx: {
      maxHeight: 150,
      objectFit: 'cover'
    },
    "data-d": getKey(rs, '17c8170acc814c88a0033307')
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    key: "card-content-9",
    variants: b.getVariants(undefined),
    sx: {
      height: 166
    },
    "data-d": getKey(rs, '17c8170acc814c88a0033308')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-20",
    variants: b.getVariants(undefined),
    container: true,
    direction: 'column',
    rowGap: 1,
    sx: {
      height: undefined
    },
    "data-d": getKey(rs, '17c8668d49d14c88a00332b1')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-51",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c8170acc914c88a0033310')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-46",
    variants: b.getVariants(undefined),
    variant: 'body2',
    "data-d": getKey(rs, '17c8170acc914c88a0033311')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-99",
    variants: b.getVariants(undefined),
    className: b.mClassnames([b.getUniqueClassName(), _stylesModule.default['clutchClass12042']]),
    style: undefined,
    text: 'As a Human Design Guide & Leadership Coach, I offer you a blueprint to how you operate so you can perform at the top of your personal and professional game. ',
    tag: 'span',
    "data-d": getKey(rs, '17c8170acc914c88a0033312')
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-50",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c8170acc814c88a0033309')
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-43",
    variants: b.getVariants(undefined),
    variant: 'caption',
    sx: {
      mr: 0.5
    },
    "data-d": getKey(rs, '17c8170acc814c88a003330a')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-96",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: '#Human Design',
    tag: 'span',
    "data-d": getKey(rs, '17c8170acc914c88a003330b')
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-45",
    variants: b.getVariants(undefined),
    variant: 'caption',
    sx: {
      mr: 0.5
    },
    "data-d": getKey(rs, '17c8170acc914c88a003330e')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-98",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: '#Business',
    tag: 'span',
    "data-d": getKey(rs, '17c8170acc914c88a003330f')
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    key: "typography-44",
    variants: b.getVariants(undefined),
    variant: 'caption',
    sx: {
      mr: 0.5
    },
    "data-d": getKey(rs, '17c8170acc914c88a003330c')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-97",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: undefined,
    text: '#Courses',
    tag: 'span',
    "data-d": getKey(rs, '17c8170acc914c88a003330d')
  })))))), /*#__PURE__*/_react.default.createElement(_CardActions.default, {
    key: "card-actions-9",
    variants: b.getVariants(undefined),
    "data-d": getKey(rs, '17c8170acc914c88a0033313')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-52",
    variants: b.getVariants(undefined),
    container: true,
    "data-d": getKey(rs, '17c8170acc914c88a0033314')
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    key: "grid-53",
    variants: b.getVariants(undefined),
    container: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    "data-d": getKey(rs, '17c8170acc914c88a0033315')
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    key: "box-27",
    variants: b.getVariants(undefined),
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    "data-d": getKey(rs, '17c8170acc914c88a0033316')
  }, /*#__PURE__*/_react.default.createElement(_State.default, {
    key: "number-state-9",
    variants: b.getVariants(undefined),
    initialValue: 3.75,
    "data-d": getKey(rs, '17c8170acc914c88a0033317')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, numberstate9Args = new Array(_len), _key = 0; _key < _len; _key++) {
        numberstate9Args[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c8170acc914c88a0033317', '178bf970a34fae252001bf06', numberstate9Args, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Rating.default, {
        key: "rating-9",
        variants: b.getVariants(undefined),
        size: 'small',
        readOnly: true,
        value: 3.75,
        precision: 0.25,
        "data-d": getKey(rs, '17c8170acc914c88a0033318')
      }), /*#__PURE__*/_react.default.createElement(_Box.default, {
        key: "box-28",
        variants: b.getVariants(undefined),
        "data-d": getKey(rs, '17c8170acc914c88a0033319')
      }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        key: "typography-47",
        variants: b.getVariants(undefined),
        variant: 'caption',
        sx: {
          fontSize: '11px',
          pl: 0.5
        },
        "data-d": getKey(rs, '17c8170acc914c88a003331a')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-100",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: b.tryCatch(function () {
          return '(' + b.propertyBind(numberstate9Args, ['0', 'state']) + ')';
        }),
        tag: false,
        "data-d": getKey(rs, '17c8170acc914c88a003331b')
      })))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, numberstate9Args) : renderFn;
    };
  }(rs, variables))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: "button-21",
    variants: b.getVariants(undefined),
    variant: 'text',
    size: 'small',
    "data-d": getKey(rs, '17c8170acc914c88a003331c')
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    key: "default-text-101",
    variants: b.getVariants(undefined),
    className: b.getUniqueClassName(),
    style: {
      textTransform: 'capitalize'
    },
    text: 'Learn More',
    tag: 'span',
    "data-d": getKey(rs, '17c8170acc914c88a003331d')
  }))))))];
};

exports.default = _default;
;