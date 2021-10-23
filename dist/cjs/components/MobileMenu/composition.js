"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var b = _interopRequireWildcard(require("@clutch-creator/bridge"));

var _Box = _interopRequireDefault(require("../Box"));

var _State = _interopRequireDefault(require("@clutch-marketplace/logic/dist/cjs/components/State"));

var _Element = _interopRequireDefault(require("@clutch-marketplace/element/dist/cjs/components/Element"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _Text = _interopRequireDefault(require("@clutch-marketplace/web-elements/dist/cjs/components/Text"));

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
  var rs = report(null, '17c585ab0d414c88a003300e', 'COMPOSITION', props, variables);
  return [/*#__PURE__*/_react.default.createElement(_Box.default, {
    key: "box-4",
    variants: b.getVariants(undefined),
    sx: {
      display: {
        xs: 'flex',
        md: 'none'
      }
    },
    "data-d": getKey(rs, '17c52f13ea514c88a0033130')
  }, /*#__PURE__*/_react.default.createElement(_State.default, {
    key: "state-mobileMenu",
    variants: b.getVariants(undefined),
    initialValue: undefined,
    "data-d": getKey(rs, '17c5829415314c88a0033001')
  }, function (r, v) {
    return function () {
      for (var _len = arguments.length, statemobileMenuArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        statemobileMenuArgs[_key] = arguments[_key];
      }

      var newVariables = {};

      var variables = _objectSpread(_objectSpread({}, v), newVariables);

      var rs = report(r, '17c5829415314c88a0033001', '178bf970a34fae252001bf06', statemobileMenuArgs, newVariables);
      var renderFn = [/*#__PURE__*/_react.default.createElement(_Element.default, {
        key: "void-element-with-children-1",
        variants: b.getVariants(undefined),
        tag: 'div',
        id: 'menu-icon-id',
        class: 'menu-icon-class',
        "data-d": getKey(rs, '17c5d5799f714c88a0033000')
      }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        key: "icon-button-1",
        variants: b.getVariants(undefined),
        onClick: b.tryCatch(function () {
          return function (event) {
            return b.propertyBind(statemobileMenuArgs, ['0', 'setState'])(event.currentTarget);
          };
        }),
        "data-d": getKey(rs, '17c51cc089014c88a0033017')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-menu",
        variants: b.getVariants(undefined),
        fontSize: 'large',
        sx: {
          color: '#ffffff'
        },
        "data-d": getKey(rs, '17c51cca62614c88a003301c')
      }, 'menu')), /*#__PURE__*/_react.default.createElement(_Menu.default, {
        key: "menu-1",
        variants: b.getVariants(undefined),
        open: b.tryCatch(function () {
          return Boolean(b.propertyBind(statemobileMenuArgs, ['0', 'state']));
        }),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        disableAutoFocusItem: undefined,
        MenuListProps: undefined,
        onClose: b.tryCatch(function () {
          return function () {
            return b.propertyBind(statemobileMenuArgs, ['0', 'setState'])('');
          };
        }),
        PopoverClasses: undefined,
        transitionDuration: undefined,
        TransitionProps: undefined,
        variant: undefined,
        anchorEl: b.tryCatch(function () {
          return b.propertyBind(statemobileMenuArgs, ['0', 'state']);
        }),
        getContentAnchorEl: 'null',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        transformOrigin: {
          horizontal: 'center'
        },
        "data-d": getKey(rs, '17c530df43914c88a003313f')
      }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: "menu-item-3",
        variants: b.getVariants(undefined),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        component: undefined,
        dense: undefined,
        disableGutters: undefined,
        divider: undefined,
        focusVisibleClassName: undefined,
        sx: undefined,
        "data-d": getKey(rs, '17c57fe57b814c88a003308a')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-22",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'Providers',
        tag: 'span',
        "data-d": getKey(rs, '17c57ffba7914c88a0033091')
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: "menu-item-7",
        variants: b.getVariants(undefined),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        component: undefined,
        dense: undefined,
        disableGutters: undefined,
        divider: undefined,
        focusVisibleClassName: undefined,
        sx: undefined,
        "data-d": getKey(rs, '17c58000e5714c88a0033099')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-26",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'Courses',
        tag: 'span',
        "data-d": getKey(rs, '17c58000e5714c88a003309a')
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: "menu-item-6",
        variants: b.getVariants(undefined),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        component: undefined,
        dense: undefined,
        disableGutters: undefined,
        divider: undefined,
        focusVisibleClassName: undefined,
        sx: undefined,
        "data-d": getKey(rs, '17c58000cf714c88a0033097')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-25",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'Media',
        tag: 'span',
        "data-d": getKey(rs, '17c58000cf714c88a0033098')
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: "menu-item-5",
        variants: b.getVariants(undefined),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        component: undefined,
        dense: undefined,
        disableGutters: undefined,
        divider: undefined,
        focusVisibleClassName: undefined,
        sx: undefined,
        "data-d": getKey(rs, '17c5800052414c88a0033095')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-24",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'Resources',
        tag: 'span',
        "data-d": getKey(rs, '17c5800052414c88a0033096')
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: "menu-item-4",
        variants: b.getVariants(undefined),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        component: undefined,
        dense: undefined,
        disableGutters: undefined,
        divider: true,
        focusVisibleClassName: undefined,
        sx: undefined,
        "data-d": getKey(rs, '17c5800032414c88a0033093')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-23",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'Events',
        tag: 'span',
        "data-d": getKey(rs, '17c5800032414c88a0033094')
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: "menu-item-1",
        variants: b.getVariants(undefined),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        component: undefined,
        dense: undefined,
        disableGutters: undefined,
        divider: undefined,
        focusVisibleClassName: undefined,
        sx: undefined,
        "data-d": getKey(rs, '17c57f193bb14c88a0033030')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-menu-3",
        variants: b.getVariants(undefined),
        color: 'inherit',
        fontSize: 'large',
        component: undefined,
        sx: {
          'margin-right': '6px'
        },
        "data-d": getKey(rs, '17c5cfe089814c88a003303e')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-28",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'account_circle',
        tag: undefined,
        "data-d": getKey(rs, '17c5cfe089814c88a003303f')
      })), /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-21",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'Profile',
        tag: 'span',
        "data-d": getKey(rs, '17c57ff39c014c88a003308d')
      })), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: "menu-item-2",
        variants: b.getVariants(undefined),
        autoFocus: undefined,
        classes: b.getUniqueClassName(),
        component: undefined,
        dense: undefined,
        disableGutters: undefined,
        divider: undefined,
        focusVisibleClassName: undefined,
        sx: undefined,
        "data-d": getKey(rs, '17c5cfbfc5d14c88a0033027')
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        key: "icon-menu-2",
        variants: b.getVariants(undefined),
        color: 'inherit',
        fontSize: undefined,
        component: undefined,
        sx: {
          'margin-right': '6px'
        },
        baseClassName: undefined,
        "data-d": getKey(rs, '17c5cfc688214c88a003302d')
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-20",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'settings',
        tag: undefined,
        "data-d": getKey(rs, '17c5cfc688214c88a003302e')
      })), /*#__PURE__*/_react.default.createElement(_Text.default, {
        key: "default-text-27",
        variants: b.getVariants(undefined),
        className: b.getUniqueClassName(),
        style: undefined,
        text: 'Settings',
        tag: 'span',
        "data-d": getKey(rs, '17c5cfbfc5d14c88a003302a')
      }))))];
      return typeof renderFn === 'function' ? renderFn.apply(void 0, statemobileMenuArgs) : renderFn;
    };
  }(rs, variables)))];
};

exports.default = _default;
;