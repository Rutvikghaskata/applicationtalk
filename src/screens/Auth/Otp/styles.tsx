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
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: Colors.white,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  textRegular: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: Fonts.Regular,
    color: Colors.grey[600],
    lineHeight: responsiveHeight(3),
  },
  textRegularsmall: {
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.Regular,
    color: Colors.grey[600],
    lineHeight: responsiveHeight(3),
  },
  OtpContent: {
    marginTop: responsiveHeight(3.5),
  },
  linkTitle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
    color: Colors.sky,
    lineHeight: responsiveHeight(3),
    marginLeft: 2,
  },
  btn: {
    marginTop: responsiveHeight(5),
  },
  loginInfo: {
    marginTop: responsiveHeight(4.5),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  terms: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: responsiveHeight(3.5),
  },
  imageBg: {
    width: '100%',
    height: responsiveHeight(35),
    marginTop: 10,
  },
  backButton: {marginTop: 30, height: 18},
  borderStyleHighLighted: {},

  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 0,
    backgroundColor: '#F0F2F2',
    borderRadius: 10,
    color: Colors.black,
    fontSize: 20,
    fontFamily: Fonts.Medium,
  },

  underlineStyleHighLighted: {
    color: Colors.black,
  },
});
