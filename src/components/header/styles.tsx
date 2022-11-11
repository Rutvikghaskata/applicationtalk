import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primaryBlue[400],
    height: responsiveHeight(12),
    width: responsiveWidth(100),
    flexDirection: 'row',
    padding: responsiveWidth(5),
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
  },
  icon: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  location: {
    alignItems: 'center',
  },
  locTitle: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.7),
    fontFamily: Fonts.Medium,
    letterSpacing: 1,
  },
  locationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 7,
  },
  locValue: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Medium,
    letterSpacing: 0.7,
  },
});
