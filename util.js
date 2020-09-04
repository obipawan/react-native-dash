import { StyleSheet } from 'react-native'

export const isStyleRow = style => {
  const flatStyle = StyleSheet.flatten(style || {})
  return flatStyle.flexDirection !== 'column'
}

const getDashStyleId = (
  { dashGap, dashLength, dashThickness, dashColor },
  isRow,
  isShortened = false
) =>
  `${dashGap}-${dashLength}-${dashThickness}-${dashColor}-${
    isRow ? 'row' : 'column'
  }-${isShortened}`

const createDashStyleSheet = (
  { dashGap, dashLength, dashThickness, dashColor },
  isRow,
  maxLength,
) => {
  const currentDashLength = maxLength === undefined ? dashLength : Math.min(maxLength, dashLength);
  const currentGapLength = maxLength === undefined ? dashGap : Math.max(maxLength - dashLength, 0);

  const idStyle = StyleSheet.create({
    style: {
      width: isRow ? currentDashLength : dashThickness,
      height: isRow ? dashThickness : currentDashLength,
      marginRight: isRow ? currentGapLength : 0,
      marginBottom: isRow ? 0 : currentGapLength,
      backgroundColor: dashColor,
    },
  })
  return idStyle.style
}

let stylesStore = {}
export const getDashStyle = (props, maxLength=undefined) => {
  const isRow = isStyleRow(props.style)
  const id = getDashStyleId(props, isRow, maxLength !== undefined)
  if (!stylesStore[id]) {
    stylesStore = {
      ...stylesStore,
      [id]: createDashStyleSheet(props, isRow, maxLength),
    }
  }
  return stylesStore[id]
}
