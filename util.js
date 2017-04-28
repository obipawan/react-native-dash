import { StyleSheet } from 'react-native'

export const isStyleRow = (style) => {
	const flatStyle = StyleSheet.flatten(style || {})
	return flatStyle.flexDirection !== 'column'
}

const getDashStyleId = ({ dashGap, dashLength, dashThickness }, isRow) => {
	return `${dashGap}-${dashLength}-${dashThickness}-${isRow ? 'row' : 'column'}`
}

const createDashStyleSheet = ({ dashGap, dashLength, dashThickness, style }, isRow) => {
	const idStyle = new StyleSheet.create({
		style: {
			width: isRow ? dashLength : dashThickness,
			height: isRow ? dashThickness : dashLength,
			marginRight: isRow ? dashGap : 0,
			marginBottom: isRow ? 0 : dashGap,
		},
	})
	return idStyle.style
}

const stylesStore = {}
export const getDashStyle = (props) => {
	const isRow = isStyleRow(props.style)
	const id = getDashStyleId(props, isRow)
	if (!stylesStore[ id ]) {
		stylesStore = {
			...stylesStore,
			[ id ]: createDashStyleSheet(props, isRow),
		}
	}
	return stylesStore[ id ]
}
