
import {ReactNode} from 'react';
import {TextInputProps} from 'react-native'

interface ExtraInputProps {
        icon: ReactNode;
        type: string;
}

export type InputProps = TextInputProps &  ExtraInputProps