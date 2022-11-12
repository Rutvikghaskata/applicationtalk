import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  card:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(3),
    backgroundColor: Colors.primaryBlue[200],
    marginLeft: responsiveWidth(2.5),
    borderRadius:5
  },
  emoji:{
   height: responsiveHeight(3),
   width: responsiveHeight(3),
   alignItems: 'center',
   justifyContent:'center',
   marginRight:10
  },
  symptoms:{
    fontSize:responsiveFontSize(2),
    color: Colors.black,
    fontFamily: Fonts.Regular
  }
});
