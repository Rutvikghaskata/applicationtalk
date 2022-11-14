import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../../../../Theme';

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
    marginBottom: responsiveHeight(5),
    borderRadius: 20,
  },
  content: {
    height: responsiveHeight(60) - 30,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingTop: responsiveHeight(12),
    paddingBottom: responsiveHeight(6),
  },
  TitlesContainer: {padding: 15},
  title: {
    fontSize: responsiveFontSize(4.2),
    fontFamily: Fonts.Regular,
    color: Colors.primaryBlue[400],
    width: responsiveWidth(80),
    lineHeight: responsiveHeight(5.5),
    letterSpacing: 0.5,
  },
  BigTitle: {
    fontSize: responsiveFontSize(4.2),
    fontFamily: Fonts.Bold,
    color: Colors.grey[900],
    width: responsiveWidth(80),
    lineHeight: responsiveHeight(5.5),
    letterSpacing: 0.5,
  },
  description: {
    width: responsiveWidth(80),
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.Regular,
    color: Colors.grey[650],
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
    marginBottom: responsiveHeight(5),
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(3),
  },
  ImageIcon: {
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(3),
  },
});
