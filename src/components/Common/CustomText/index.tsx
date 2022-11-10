import {StyleSheet, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../../Theme';

const CustomText: FunctionComponent<TextProps> = ({type, ...props}) => {
  return (
    <Text
      style={[
        type === 'medium' ? styles.mediumText :type === 'extra-bold' ? styles.BigText : null,
        styles.text,props.style
      ]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.Bold,
    color: Colors.primaryBlue[400],

    letterSpacing: 0.5,
  },
  mediumText: {
    fontSize: responsiveFontSize(2.8),
    lineHeight: responsiveHeight(5.5),
  },
  BigText: {
    fontSize: responsiveFontSize(4.2),
    lineHeight: responsiveHeight(5.5),
  },
});
export default CustomText;
