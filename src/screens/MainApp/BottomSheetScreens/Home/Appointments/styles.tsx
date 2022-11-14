import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  appointmentWrapper: {
    paddingHorizontal: responsiveWidth(3.5),
    marginTop: responsiveHeight(5),
  },
  appTitle: {
    fontSize: responsiveFontSize(2.5),
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
  title: {
    fontSize: responsiveFontSize(2.4),
    fontFamily: Fonts.Medium,
  },
  whiteText: {
    color: Colors.white,
  },
  description: {
    marginTop: 6,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.Regular,
  },
  scheduleInfoWrapper: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4.5),
    height: responsiveHeight(7),
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
});
