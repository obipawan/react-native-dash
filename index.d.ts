// Type definitions for react-native-dash v0.0.9
// Project: react-native-dash
// Definitions by: alex-blair <https://github.com/alex-blair>

import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

export interface DashProps {
  dashGap: number;
  dashLength: number;
  dashThickness: number;
  style?: StyleProp<ViewStyle>;
  dashColor?: string;
  dashStyle?: StyleProp<ViewStyle>;
}

export default class Dash extends React.Component<DashProps> {}
