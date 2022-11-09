import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';


export interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}
