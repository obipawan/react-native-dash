/*
* Draws fully customizable dashed lines vertically or horizontally
*
* @providesModule Dash
*/

import React from 'react'
import { View } from 'react-native'
import MeasureMeHOC from 'react-native-measureme'

const Dash = (
	{
		dashGap,
		dashLength,
		dashThickness,
		dashStyle,
		style = {},
		...props,
	}) => {
	let length = props.width
	let { flexDirection = 'row' } = style
	let width = dashLength
	let height = dashThickness
	let marginRight = dashGap
	let marginBottom = 0
	if (flexDirection === 'column') {
		length = props.height
		width = dashThickness
		height = dashLength
		marginRight = 0
		marginBottom = dashGap
	}

	let n = Math.ceil(length / (dashGap + dashLength))
	let dash = []
	for (let i = 0; i < n; i++) {
		dash.push(
			<View
				key={ i }
				style={ [
					dashStyle,
					{
						width,
						height,
						marginRight,
						marginBottom,
					},
				] }
			/>
		)
	}
	return (
		<View style={ [ style, { flexDirection } ] }>
			{ dash }
		</View>
	)
}

Dash.propTypes = {
	style: View.propTypes.style,
	dashGap: React.PropTypes.number.isRequired,
	dashLength: React.PropTypes.number.isRequired,
	dashThickness: React.PropTypes.number.isRequired,
	dashColor: React.PropTypes.string,
	dashStyle: View.propTypes.style,
}

Dash.defaultProps = {
	dashGap: 2,
	dashLength: 4,
	dashThickness: 2,
	dashStyle: { backgroundColor: 'black' }
}

module.exports = MeasureMeHOC(Dash)
