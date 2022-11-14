import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  roundBackground: {
    position: 'absolute',
    alignSelf: 'center',
    height: responsiveHeight(70),
    width: responsiveWidth(130),
    backgroundColor: Colors.primaryBlue[400],
    borderRadius: 300,
    top: -responsiveHeight(49),
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveWidth(42),
    width: responsiveWidth(44),
    borderRadius: responsiveWidth(5.5),
    paddingHorizontal: responsiveWidth(3.5),
    paddingVertical: responsiveWidth(7),
    backgroundColor: Colors.white,
    shadowColor: Colors.grey[200],
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  profile: {
    width: responsiveWidth(92),
    backgroundColor: Colors.sky,
    height: responsiveHeight(15),
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Profiler: {
    justifyContent: 'center',
    marginLeft: 30,
  },
  CustomText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2.3),
    fontFamily: Fonts.Medium,
    marginLeft: 20,
  },
  CustomTextMin: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.Regular,
    marginLeft: 20,
    marginTop: 3,
  },
  homeTitle: {
    color: Colors.grey[900],
  },
  homeText: {
    color: Colors.grey[900],
    fontFamily: Fonts.Medium,
    fontSize: 18,
    marginTop: 9,
    textAlign: 'center',
  },
  Icon: {
    height: responsiveWidth(13),
    width: responsiveWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    marginTop: responsiveWidth(2),
  },
  cardWrapper: {
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveWidth(3.5),
  },

  cardDetail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
