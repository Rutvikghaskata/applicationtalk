
import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native'

interface ExtraInputProps {
        type: ReactNode;
}

export type CardProps = TouchableOpacityProps &  ExtraInputProps

export type AppointmentProps = TouchableOpacityProps 
