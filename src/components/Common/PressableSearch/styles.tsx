import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  searchInputStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(6.7),
    paddingLeft: 15,
    borderRadius: 7,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  placeholder: {
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.Regular,
    marginLeft: 7,
    color:Colors.grey[500]
  },
});
