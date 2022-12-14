import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  InputWrapper: {
    width: '100%',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  valueField:{
    width: '100%',
    borderBottomWidth: 1,
    marginLeft: 10,
    paddingBottom:16,
  },
  LeftIcon: {
    marginTop:2,
    height: responsiveHeight(2.8),
    width: responsiveHeight(2.8),
    alignItems: 'center',
    justifyContent:'center'
  },
  Input: {
    width: '100%',
    borderBottomWidth: 1,
    marginLeft: 10,
    paddingLeft:0,
    fontFamily: Fonts.Regular,
    fontSize: responsiveFontSize(2),
  },
  downIcon:{
    position:'absolute',
    right:7,
    top:0,
  },
  selectContainer:{
    position: 'absolute',
    top:35,
    width: '100%',
    height: 200,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 5,
    elevation: 10,
    overflow: 'hidden',
    zIndex:1000,
  },
  selectOptions:{
   justifyContent: 'center',
  },
  value:{
    fontFamily: Fonts.Regular,
    color: Colors.grey[500],
  },
  label:{
    fontFamily: Fonts.Regular,
    color: Colors.grey[500],
    padding:12,
    margin:6,
  },
  selected:{
    backgroundColor:Colors.sky,
    color:Colors.white,
    borderRadius:5
  }
});
