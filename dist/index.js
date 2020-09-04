'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _reactNativeMeasureme = require('react-native-measureme');

var _reactNativeMeasureme2 = _interopRequireDefault(_reactNativeMeasureme);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dash = function Dash(props) {
	var isRow = (0, _util.isStyleRow)(props.style);
	var length = isRow ? props.width : props.height;
	var fullDashesCount = Math.floor(length / (props.dashGap + props.dashLength));
	var lastDashSize = length - fullDashesCount * (props.dashGap + props.dashLength);
	var calculatedDashStyles = (0, _util.getDashStyle)(props);
	var calculatedLastDashStyle = (0, _util.getDashStyle)(props, lastDashSize);
	var dash = [];
	for (var i = 0; i < fullDashesCount; i++) {
		dash.push(_react2.default.createElement(_reactNative.View, {
			key: i,
			style: [calculatedDashStyles, props.dashStyle]
		}));
	}
	if (lastDashSize > 0) {
		dash.push(_react2.default.createElement(_reactNative.View, {
			key: fullDashesCount,
			style: [calculatedLastDashStyle, props.dashStyle]
		}));
	}
	return _react2.default.createElement(
		_reactNative.View,
		{
			onLayout: props.onLayout,
			style: [props.style, isRow ? styles.row : styles.column]
		},
		dash
	);
}; /*
   * Draws fully customizable dashed lines vertically or horizontally
   *
   * @providesModule Dash
   */

var styles = _reactNative.StyleSheet.create({
	row: { flexDirection: 'row' },
	column: { flexDirection: 'column' }
});

Dash.propTypes = {
	style: _reactNative.ViewPropTypes.style,
	dashGap: _propTypes2.default.number.isRequired,
	dashLength: _propTypes2.default.number.isRequired,
	dashThickness: _propTypes2.default.number.isRequired,
	dashColor: _propTypes2.default.string,
	dashStyle: _reactNative.ViewPropTypes.style
};

Dash.defaultProps = {
	dashGap: 2,
	dashLength: 4,
	dashThickness: 2,
	dashColor: 'black'
};

exports.default = (0, _reactNativeMeasureme2.default)(Dash);
