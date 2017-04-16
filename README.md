# react-native-dash
[![NPM version](https://badge.fury.io/js/react-native-dash.svg)](http://badge.fury.io/js/react-native-dash)

A super simple `<Dash />` component for react-native to draw customisable dashed lines

## Installation
```sh
npm i --save react-native-dash
```

## Props
| name | desc | type | default
| --- | --- | --- | --- |
| `style` | Dash container style  | [View.PropTypes.Style](https://facebook.github.io/react-native/docs/view.html#style) | `{flexDirection = 'row'}`
| `dashGap` | Gap between two dashes | number | `2`
| `dashLength` | Length of each dash | number | `4`
| `dashThickness` | Thickness of each dash | number | `2`
| `dashColor` | Color of each dash | string | `black`
| `dashStyle` | Dashes style | [View.PropTypes.Style](https://facebook.github.io/react-native/docs/view.html#style) | {}

 - **ProTip 1**: Use `flexDirection` in style to get horizontal or vertical dashes. By default, it's `row`
 - **ProTip 2**: Use `{borderRadius: 100, overflow: 'hidden'}` in dashStyle to get rounded dotes instead of straight line dashes. 

## Usage
```javascript
import Dash from 'react-native-dash';

//draws a horizontal dashed line with defaults. Also works with flex
render() {
    return <Dash style={{width:100, height:1}}/>
}

//draws a vertical dashed line with defaults.
render() {
    return <Dash style={{width:1, height:100, flexDirection:'column'}}/>
}
```

### Dependenies
 [react-native-measureme](https://github.com/obipawan/react-native-measureme)
### Development

PRs highly appreciated

License
----
MIT License
