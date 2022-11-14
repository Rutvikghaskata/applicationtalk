import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  symptomsWrapper: {
    marginTop: responsiveHeight(5),
  },
  symptomshead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3.5),
  },
  appTitle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: Fonts.Medium,
    color: Colors.grey[900],
  },
  symptoms: {
    marginTop: responsiveHeight(3.5),
  },
  linearBg: {
    position: 'absolute',
    top: -5,
    height: 55,
    width: responsiveWidth(7),
    zIndex: 10,
  },
  seeAll: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.Medium,
    color: Colors.primaryBlue[400],
  },
});
