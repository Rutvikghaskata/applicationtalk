import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  specialist: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(5),
  },
  specialisthead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(3.5),
  },
  appTitle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.Medium,
    color: Colors.grey[900],
  },
  seeAll: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.Medium,
    color: Colors.primaryBlue[400],
  },
  linearBg1: {
    position: 'absolute',
    top: -5,
    height: responsiveWidth(40),
    width: responsiveWidth(5),
    zIndex: 10,
  },
});
