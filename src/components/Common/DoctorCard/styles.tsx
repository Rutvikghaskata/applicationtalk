import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  likeStlye: {
    marginLeft: responsiveWidth(2.8),
    marginTop: responsiveHeight(0.5),
  },
  imageBg: {
    marginTop: responsiveHeight(3),
    height: responsiveHeight(10.5),
    width: responsiveHeight(10.5),
  },
  carddoctor: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(45),
    height: 244,
    borderRadius: 20,
    border: 1,
    marginRight: responsiveWidth(3),
    marginBottom: responsiveWidth(3),
    overflow: 'hidden',
    shadowColor: Colors.grey[200],
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
   elevation:5
  },
  like: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    backgroundColor: Colors.sky,
    top: -4,
    right: -6,
    position: 'absolute',
    borderRadius: 50,
    justifyContent: 'center',
  },
  DrText: {
    color: Colors.grey[900],
    fontFamily: Fonts.Medium,
    fontSize: responsiveFontSize(2.2),
  },
  Drspecial: {
    color: Colors.grey[1000],
    fontFamily: Fonts.Medium,
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeight(1),
  },

  star: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(1.5),
    width: 69,
    height: responsiveHeight(4.8),
    borderRadius: 60,
    backgroundColor: Colors.yellow.light,
  },
  starText: {
    color: Colors.grey[900],
    fontFamily: Fonts.Regular,
    fontSize: responsiveFontSize(1.9),
    marginLeft: responsiveWidth(1.2),
  },
  photosContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  DetalisContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(3.2),
  },
});
