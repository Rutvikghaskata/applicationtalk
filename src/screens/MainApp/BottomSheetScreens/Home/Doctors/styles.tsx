import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  doctors: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(3.5),
  },
  doctorhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
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
});
