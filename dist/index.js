'use strict';

var React = require('react');
var reactNative = require('react-native');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var isStyleRow = function isStyleRow(style) {
  var flatStyle = reactNative.StyleSheet.flatten(style || {});
  return flatStyle.flexDirection !== 'column';
};

var getDashStyleId = function getDashStyleId(_ref, isRow) {
  var dashGap = _ref.dashGap,
      dashLength = _ref.dashLength,
      dashThickness = _ref.dashThickness,
      dashColor = _ref.dashColor;
  return "".concat(dashGap, "-").concat(dashLength, "-").concat(dashThickness, "-").concat(dashColor, "-").concat(isRow ? 'row' : 'column');
};

var createDashStyleSheet = function createDashStyleSheet(_ref2, isRow) {
  var dashGap = _ref2.dashGap,
      dashLength = _ref2.dashLength,
      dashThickness = _ref2.dashThickness,
      dashColor = _ref2.dashColor;
  var idStyle = reactNative.StyleSheet.create({
    style: {
      width: isRow ? dashLength : dashThickness,
      height: isRow ? dashThickness : dashLength,
      marginRight: isRow ? dashGap : 0,
      marginBottom: isRow ? 0 : dashGap,
      backgroundColor: dashColor
    }
  });
  return idStyle.style;
};

var stylesStore = {};
var getDashStyle = function getDashStyle(props) {
  var isRow = isStyleRow(props.style);
  var id = getDashStyleId(props, isRow);

  if (!stylesStore[id]) {
    stylesStore = _objectSpread2(_objectSpread2({}, stylesStore), {}, _defineProperty({}, id, createDashStyleSheet(props, isRow)));
  }

  return stylesStore[id];
};

var defaultProps = {
  dashGap: 2,
  dashLength: 4,
  dashThickness: 2,
  dashColor: 'black'
};

var Dash = function Dash(props) {
  props = _objectSpread2(_objectSpread2({}, defaultProps), props);
  var _props = props,
      style = _props.style,
      dashGap = _props.dashGap,
      dashLength = _props.dashLength,
      onLayout = _props.onLayout;
  var isRow = React.useMemo(function () {
    return isStyleRow(style);
  }, [style]);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var onLayoutView = React.useCallback(function (event) {
    setWidth(event.nativeEvent.layout.width);
    setHeight(event.nativeEvent.layout.height);
    onLayout === null || onLayout === void 0 ? void 0 : onLayout(event);
  }, []);
  var length = React.useMemo(function () {
    return isRow ? width : height;
  }, [width, height, isRow]);
  var n = React.useMemo(function () {
    return Math.ceil(length / (dashGap + dashLength));
  }, [length, dashGap, dashLength]);
  var calculatedDashStyles = getDashStyle(props);
  var dash = [];

  for (var i = 0; i < n; i++) {
    dash.push( /*#__PURE__*/React__default["default"].createElement(reactNative.View, {
      key: i,
      style: [calculatedDashStyles, props.dashStyle]
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(reactNative.View, {
    onLayout: onLayoutView,
    style: [props.style, isRow ? styles.row : styles.column]
  }, dash);
};

var styles = reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  }
});

module.exports = Dash;
