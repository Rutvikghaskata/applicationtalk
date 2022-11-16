import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';

interface ExtraInputProps {
  label: ReactNode;
  visible: boolean;
}

export type AlertProps = TouchableOpacityProps & ExtraInputProps;
