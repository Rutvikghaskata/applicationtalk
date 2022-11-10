import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';
export interface TextProps {
  children: ReactNode;
  type: string;
  style?: StyleProp<TextStyle>;
}
