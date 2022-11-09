import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    buttonWrapper:{
        width:'100%',
        height:responsiveHeight(7),
        borderRadius:responsiveHeight(2.3),
        backgroundColor:Colors.sky,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label:{
      color:Colors.white,
      fontSize:responsiveFontSize(2.3),
      fontFamily:Fonts.Medium
    }
});
