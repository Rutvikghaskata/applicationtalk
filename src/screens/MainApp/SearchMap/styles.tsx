import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('window');

const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 40;

export const styles = StyleSheet.create({
  headerBackground: {
    alignSelf: 'center',
    height: 70,
    width: responsiveWidth(100),
    backgroundColor: Colors.primaryBlue[400],
    paddingHorizontal: responsiveWidth(3.5),
  },
  mapView: {
    height: responsiveHeight(100) - responsiveHeight(12),
    width: responsiveWidth(100),
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  markerWrap: {
    height: 70,
    width: 70,
    backgroundColor: Colors.sky,
    borderWidth: 7,
    borderColor: Colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cardContainer: {
    elevation: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    padding: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {height: 70, width: 70},
  InfoWrapper: {
    height: '100%',
    width: CARD_WIDTH - 110,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  name: {
    color: Colors.sky,
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  description: {
    color: Colors.grey[400],
    fontSize: 14,
    fontFamily: Fonts.Regular,
    marginTop: -5,
  },
  otherInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  date:{
    color: Colors.grey[900],
    fontSize: 14,
    fontFamily: Fonts.Regular,
  }
});
