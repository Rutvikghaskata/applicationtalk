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
    height: responsiveHeight(3),
  },
  Input: {
    width: '100%',
    borderBottomWidth: 1,
    marginLeft: 10,
    fontFamily: Fonts.Regular,
    color: Colors.grey[500],
    // fontSize: 16,
    fontSize: responsiveFontSize(1.9),
  },
});
