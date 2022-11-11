import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  headerBackground: {
    alignSelf: 'center',
    height: responsiveHeight(70),
    width: responsiveWidth(120),
    backgroundColor: Colors.primaryBlue[400],
    borderRadius: 300,
    top: -responsiveHeight(48),
  },
  card: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.sky,
    borderRadius: 20,
  },
  cards: {
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(3.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
