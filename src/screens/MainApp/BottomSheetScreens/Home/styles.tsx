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
    top: -responsiveHeight(49),
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
  symptomsWrapper: {
    marginTop: responsiveHeight(5),
  },
  symptomshead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(3.5),
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
  symptoms: {
    marginTop: responsiveHeight(3.5),
  },
  doctors: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(3.5),
  },
  doctorhead:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:responsiveHeight(4),
  },
  linearBg: {
    position: 'absolute',
    top: -5,
    height: 55,
    width: responsiveWidth(7),
    zIndex: 10,
  },
  specialist:{
    width: responsiveWidth(100),
    marginTop: responsiveHeight(5),
  },
  specialisthead:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:responsiveHeight(4),
    paddingHorizontal: responsiveWidth(3.5),
  },
  linearBg1: {
    position: 'absolute',
    top: -5,
    height: responsiveWidth(40),
    width: responsiveWidth(5),
    zIndex: 10,
  },
  hospitalWrapper:{
    width: responsiveWidth(100),
    marginTop: responsiveHeight(6),
    marginBottom:100
  },
  hospitalhead:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:responsiveHeight(4),
    paddingHorizontal: responsiveWidth(3.5),
  },
});
