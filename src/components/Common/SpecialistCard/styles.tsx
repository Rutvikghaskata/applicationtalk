import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
 card:{
  height: responsiveWidth(33),
  width: responsiveWidth(33),
  marginLeft: responsiveWidth(4),
  borderRadius:responsiveWidth(5.5),
  alignItems:'center',
  justifyContent:'space-between',
  padding:responsiveWidth(5.5)
 },
 image:{
  height: responsiveWidth(13),
  width: responsiveWidth(13),
  alignItems:'center',
  justifyContent:'center',
 },
 title:{
  fontSize: responsiveFontSize(2),
  color:Colors.white,
  fontFamily:Fonts.Medium
 }
});
