import {ReactNode} from 'react';
import {StyleProp, TextStyle,TouchableOpacityProps} from 'react-native';


export interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}
export type PressableProps = TouchableOpacityProps &  Props