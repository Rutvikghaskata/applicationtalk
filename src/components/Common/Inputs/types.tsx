
import {ReactNode} from 'react';
import {TextInputProps,ImageProps} from 'react-native'

interface ExtraInputProps {
        icon: ReactNode;
        type: string;
}

export type InputProps = TextInputProps &  ExtraInputProps