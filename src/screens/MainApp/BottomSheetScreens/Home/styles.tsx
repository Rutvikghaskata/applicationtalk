import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
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
  }
});
