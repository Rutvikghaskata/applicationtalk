import {ReactNode,ComponentProps} from 'react';
import {TouchableOpacityProps,StyleProp,ViewStyle} from 'react-native'

interface ExtraProps {
        style:StyleProp<ViewStyle>
}

export type BackIconProps = TouchableOpacityProps &  ExtraProps