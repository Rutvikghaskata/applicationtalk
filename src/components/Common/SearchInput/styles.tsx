import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  serachInputStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(6.7),
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 7,
    borderColor: '#E0E0E0',
    backgroundColor: Colors.grey[100],
    overflow: 'hidden',
  },
  textInputStyle: {
    width:'100%',
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.Regular,
    marginLeft: 7,
    color:Colors.black,
  },
});
