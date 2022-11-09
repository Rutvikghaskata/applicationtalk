
import {ReactNode} from 'react';
import {TouchableOpacityProps,ImageProps} from 'react-native'

interface ExtraInputProps {
        label: ReactNode;
}

export type ButtonProps = TouchableOpacityProps &  ExtraInputProps