import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    padding: 15,
    backgroundColor: Colors.white,
  },
  imageBg: {
    width: '100%',
    height: responsiveHeight(40) - 15,
    backgroundColor: Colors.primaryBlue['400'],
    marginBottom: 15,
    borderRadius: 20,
  },
  content: {
    height: responsiveHeight(60) - 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingTop: responsiveHeight(12),
    paddingBottom: responsiveHeight(6),
  },
  title: {
    alignSelf: 'center',
    width: responsiveWidth(60),
    fontSize: responsiveFontSize(4.2),
    fontFamily: Fonts.Bold,
    color: Colors.primaryBlue[400],
    textAlign: 'center',
    lineHeight: responsiveHeight(5.5),
    letterSpacing: 0.5,
  },
  description: {
    alignSelf: 'center',
    width: responsiveWidth(42),
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.Regular,
    color: Colors.grey[400],
    textAlign: 'center',
    lineHeight: responsiveHeight(2.5),
    marginTop: 15,
  },
  nextBtn: {
    height: responsiveHeight(9),
    width: responsiveHeight(9),
    borderRadius: responsiveHeight(5),
    backgroundColor: Colors.primaryBlue['400'],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
