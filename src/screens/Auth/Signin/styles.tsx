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
    height: responsiveHeight(35),
    marginTop: 10,
  },
  logInContent: {},
  backButton: {marginTop: 20, height: 18},
  detailsContent: {
    marginTop: 10,
  },
  formContainer: {
    marginTop: responsiveHeight(3.5),
  },
  password: {
    marginTop: responsiveHeight(2.5),
  },
  terms: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
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
    marginTop: responsiveHeight(3.5),
  },
  loginInfo: {
    marginTop: responsiveHeight(4.5),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  MultiInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {width: '50%', overflow: 'hidden'},
  inputContainer: {
    marginTop: responsiveHeight(2.5),
  },
  nextBtn: {
    marginTop: responsiveHeight(4),
  },
});
