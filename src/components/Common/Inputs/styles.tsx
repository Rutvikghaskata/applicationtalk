import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  InputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftIcon: {
    marginTop: 3,
    height: responsiveHeight(2.8),
  },
  Input: {
    width: '100%',
    borderBottomWidth: 1,
    marginLeft: 10,
    paddingLeft: 0,
    fontFamily: Fonts.Regular,
    fontSize: responsiveFontSize(2),
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
});
