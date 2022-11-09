import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(4.5),
    backgroundColor: Colors.white,
  },
  imageBg: {
    width: '100%',
    height: responsiveHeight(38),
    marginTop: 10,
  },
  signUpContent: {},
  title: {
    fontSize: responsiveFontSize(4.2),
    fontFamily: Fonts.Bold,
    color: Colors.primaryBlue[400],
    lineHeight: responsiveHeight(5.5),
    letterSpacing: 0.5,
  },
  backButton: {marginTop: 20, height: 18},
  detailsContent: {
    marginTop: 10,
  },
});
