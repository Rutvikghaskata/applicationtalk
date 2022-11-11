import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FDFDFD',
  },
  headerBackground: {
    position: 'absolute',
    alignSelf: 'center',
    height: responsiveHeight(70),
    width: responsiveWidth(130),
    backgroundColor: Colors.primaryBlue[400],
    borderRadius: 300,
    top: -responsiveHeight(47),
  },
  searchWrapper: {
    paddingHorizontal: responsiveWidth(3.5),
    marginBottom: responsiveHeight(2.5),
  },
  cardWrapper: {
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(3.5),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  card: {
    height: responsiveWidth(42),
    width: responsiveWidth(45),
    borderRadius: responsiveWidth(5.5),
    paddingHorizontal: responsiveWidth(3.5),
    paddingVertical: responsiveWidth(4.5),
    elevation: 1,
    justifyContent: 'space-between',
  },
  clinic: {
    backgroundColor: Colors.sky,
  },
  home: {
    backgroundColor: Colors.white,
  },
  Icon: {
    height: responsiveWidth(13),
    width: responsiveWidth(13),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: responsiveFontSize(2.4),
    fontFamily: Fonts.Medium,
  },
  whiteText: {
    color: Colors.white,
  },
  homeTitle: {
    color: Colors.grey[900],
  },
  description: {
    marginTop: 6,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
  },
  homeText: {
    color: Colors.grey[500],
  },
  appointmentWrapper: {
    paddingHorizontal: responsiveWidth(3.5),
    marginTop: responsiveHeight(5),
  },
  appTitle: {
    fontSize: responsiveFontSize(2.8),
    fontFamily: Fonts.Medium,
    color: Colors.grey[900],
  },
  seeAll: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: Fonts.Medium,
    color: Colors.primaryBlue[400],
  },
  appointmentCard: {
    padding: responsiveWidth(4.5),
    marginTop: responsiveHeight(3),
    backgroundColor: Colors.primaryBlue[400],
    borderRadius: responsiveWidth(2),
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveWidth(4.5),
  },
  profileImage: {
    height: responsiveWidth(17),
    width: responsiveWidth(17),
  },
  profileInfo: {
    marginLeft: responsiveWidth(3.5),
  },
  scheduleInfoWrapper: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4.5),
    height: responsiveHeight(7.5),
    backgroundColor: Colors.primaryBlue[300],
    borderRadius: responsiveWidth(2),
  },
  icon: {
    height: responsiveHeight(4),
    width: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduleText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
    color: Colors.white,
    paddingLeft: 5,
  },
  symptoms: {
    marginTop: responsiveHeight(3.5),
  },
  cards: {
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(3.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
