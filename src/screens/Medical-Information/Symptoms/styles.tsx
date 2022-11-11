import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerMain: {
    paddingHorizontal: responsiveWidth(5),
  },
  uperScroll: {
    height: responsiveHeight(20),
  },
  itemStyle: {
    padding: 10,
  },
  selctionContainer: {},
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    // backgroundColor:'red',
  },
  checkboxText: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.Regular,
    color: Colors.black,
    marginLeft: responsiveWidth(3),
  },
  containerSearch: {
    paddingHorizontal: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  serachInputStyle: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderRadius: 6,
    borderColor: '#E0E0E0',
    backgroundColor: '#F0F2F2',
    marginTop: responsiveHeight(2),
  },
  textInputStyle: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.Regular,
    marginLeft: 7,
    color:"#000000"
  },
  iconInputStyle: {
    marginTop: responsiveHeight(1.8),
  },
  containerCheckbox: {
    paddingHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(1.8),
    height: responsiveHeight(54.3),
  },
  mainContent: {marginTop: responsiveHeight(2.5)},
  backButton: {marginTop: 20, height: 18},
  content: {
    height: responsiveHeight(100) - 40,
    justifyContent: 'space-between',
    // paddingHorizontal: responsiveWidth(1),
    paddingBottom: responsiveWidth(6),
  },
  mainContentTitle: {
    // width: 600,
    height: responsiveWidth(13),
    marginTop: responsiveHeight(2.5),
    borderWidth: 1,
    backgroundColor: '#263077',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
  },
  ButtonContainer: {
    height: responsiveHeight(9),
    position: 'absolute',
    bottom: responsiveHeight(0.9),
    paddingHorizontal: responsiveWidth(5),
    width: '100%',
  },
  subtitle: {
    paddingHorizontal: responsiveWidth(5),
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
  },
});
