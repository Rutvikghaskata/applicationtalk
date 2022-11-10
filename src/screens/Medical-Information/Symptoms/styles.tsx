import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: Colors.white,
  },
  itemStyle: {
    padding: 10,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderRadius: 6,
    borderColor: '#E0E0E0',
    backgroundColor: '#F0F2F2',
  },
  mainContent: {marginTop: responsiveHeight(2.5)},
  backButton: {marginTop: 20, height: 18},
  content: {
    height: responsiveHeight(100) - 40,
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(1),
    paddingBottom: responsiveWidth(6),
  },
  mainContentTitle: {
    width:600,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#263077',
  },
  title: {
    alignSelf: 'center',
  },
});
