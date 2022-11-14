import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  markerWrap:{
    height:70,
    width:70,
    backgroundColor:Colors.sky,
    borderWidth:7,
    borderColor:Colors.white,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  }
});
