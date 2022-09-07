// Type definitions for react-native-dash v0.0.9
// Project: react-native-dash
// Definitions by: alex-blair <https://github.com/alex-blair>

import { StyleProp, ViewStyle, LayoutChangeEvent } from 'react-native';
interface Props {
    style?: StyleProp<ViewStyle>;
    dashGap: number;
    dashLength: number;
    dashThickness: number;
    dashColor?: string;
    dashStyle?: StyleProp<ViewStyle>;
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}
const Dash: (props: Props) => JSX.Element;
export default Dash;
