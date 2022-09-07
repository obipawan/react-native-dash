/*
* Draws fully customizable dashed lines vertically or horizontally
*
* @providesModule Dash
*/

import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, LayoutChangeEvent } from 'react-native'
import { getDashStyle, isStyleRow } from './util'
import { useMemo } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

interface Props {
	style?: StyleProp<ViewStyle>;
	dashGap: number;
	dashLength: number;
	dashThickness: number;
	dashColor?: string;
	dashStyle?: StyleProp<ViewStyle>;
	onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}

const defaultProps: Partial<Props> = {
	dashGap: 2,
	dashLength: 4,
	dashThickness: 2,
	dashColor: 'black',
}
const Dash = (props: Props) => {
	props = {...defaultProps, ...props};
	const {
		style,
		dashGap,
		dashLength,
		onLayout,
	} = props;
	const isRow = useMemo( () => {
		return isStyleRow(style)
	}, [ style ])
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	const onLayoutView = useCallback( (event: LayoutChangeEvent) => {
		setWidth(event.nativeEvent.layout.width)
		setHeight(event.nativeEvent.layout.height)
		onLayout?.(event)
	}, [])
	const length = useMemo(() => {
		return  isRow ? width : height;
	},[width, height, isRow])

	const n = useMemo(() => Math.ceil(length / (dashGap + dashLength)) ,[length, dashGap, dashLength]) 
	const calculatedDashStyles = getDashStyle(props)
	let dash: React.ReactElement[] = []
	for (let i = 0; i < n; i++) {
		dash.push(
			<View
				key={ i }
				style={ [
					calculatedDashStyles,
					props.dashStyle,
				] }
			/>
		)
	}
	return (
		<View
			onLayout={ onLayoutView }
			style={ [ props.style, isRow ? styles.row : styles.column ] }
		>
			{ dash }
		</View>
	)
}

const styles = StyleSheet.create({
	row: { flexDirection: 'row' },
	column: { flexDirection: 'column' },
})



export default Dash
