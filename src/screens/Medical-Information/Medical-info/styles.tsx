import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: Colors.white,
  },
  backButton: {marginTop: 20, height: 18},
  title:{
    alignSelf: 'center',
  },
  selectWrapper:{
    marginTop: responsiveHeight(3),
  },
  selectWrapper1:{
    marginTop: responsiveHeight(7),
  }
});
