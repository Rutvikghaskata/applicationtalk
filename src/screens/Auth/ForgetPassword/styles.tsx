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
  imageBg: {
    width: '100%',
    height: responsiveHeight(40),
    marginTop: 10,
  },
  ForgetContent: {},
  backButton: {marginTop: 20, height: 18},
  detailsContent: {
    marginTop: 10,
  },
  formContainer: {
    marginTop: responsiveHeight(3.5),
  },
  password: {
    marginTop: responsiveHeight(5),
  },
  terms: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: responsiveHeight(3.5),
  },
  textRegular: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
    color: Colors.grey[600],
    lineHeight: responsiveHeight(3),
  },
  linkTitle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
    color: Colors.sky,
    lineHeight: responsiveHeight(3),
    marginLeft: 2,
  },
  btn: {
    marginTop: responsiveHeight(6.5),
  },

});
