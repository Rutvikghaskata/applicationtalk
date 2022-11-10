
import {ReactNode} from 'react';
import {TextInputProps} from 'react-native'

interface ExtraInputProps {
        icon: ReactNode;
}

export type InputProps = TextInputProps &  ExtraInputProps