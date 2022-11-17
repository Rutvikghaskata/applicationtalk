import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';

interface ExtraInputProps {
  label: ReactNode;
  visible: boolean;
  onHandleModel(): void;
}

export type AlertProps = TouchableOpacityProps & ExtraInputProps;
