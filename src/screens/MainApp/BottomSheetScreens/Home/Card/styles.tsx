import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Theme';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  card: {
    height: responsiveWidth(42),
    width: responsiveWidth(45),
    borderRadius: responsiveWidth(5.5),
    paddingHorizontal: responsiveWidth(3.5),
    paddingVertical: responsiveWidth(4.5),
    elevation: 1,
    justifyContent: 'space-between',
  },
  clinic: {
    backgroundColor: Colors.sky,
  },
  home: {
    backgroundColor: Colors.white,
  },
  Icon: {
    height: responsiveWidth(13),
    width: responsiveWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    color: Colors.grey[500],
  },
  title: {
    fontSize: responsiveFontSize(2.4),
    fontFamily: Fonts.Medium,
  },
  whiteText: {
    color: Colors.white,
  },
  homeTitle: {
    color: Colors.grey[900],
  },
  description: {
    marginTop: 6,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
  },
});
