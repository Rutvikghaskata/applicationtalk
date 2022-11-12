import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
 card:{
  height: responsiveWidth(38),
  width: responsiveWidth(38),
  marginLeft: responsiveWidth(4),
  borderRadius:responsiveWidth(5.5),
  alignItems:'center',
  justifyContent:'space-between',
  overflow:'hidden'
 },
 image:{
  width:'100%',
  height:responsiveWidth(28),
 },
 name:{
  height:responsiveWidth(10),
  width: '100%',
  backgroundColor:Colors.sky,
  alignItems:'center',
  justifyContent:'center'
 },
 title:{
  fontSize: responsiveFontSize(1.8),
  color:Colors.white,
  fontFamily:Fonts.Medium
 }
});
