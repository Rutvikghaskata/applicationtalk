import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
  },
  imageBg:{ 
    width: '100%',
    height: responsiveHeight(40),
    marginTop:30,
  },
  signUpContent:{
  }
});
