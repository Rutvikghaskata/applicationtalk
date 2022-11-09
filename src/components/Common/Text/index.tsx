import {StyleSheet, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TextProps} from './types';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../../Theme';

const TextComponent: FunctionComponent<TextProps> = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: responsiveFontSize(4.2),
    fontFamily: Fonts.Bold,
    color: Colors.primaryBlue[400],
    lineHeight: responsiveHeight(5.5),
    letterSpacing: 0.5,
  },
});
export default TextComponent;
