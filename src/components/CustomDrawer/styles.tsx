import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
export const styles = StyleSheet.create({
  MainCustomDrawer: {
    height: 100,
    width: '100%',
    backgroundColor: Colors.sky,
    marginTop: -5,
  },
  CustomDrawer: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  subCustomDrawer: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CustomText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2.3),
    fontFamily: Fonts.Medium,
    marginLeft: 10,
  },
  DrawerOpen: {
    position: 'absolute',
    height: 100,
  },
  DrawerClose: {
    position: 'absolute',
    height: 100,
    justifyContent: 'center',
    zIndex: 1,
  },
  MainDrawer: {
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.grey[200],
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconDrawer: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  NameDrawer: {
    color: Colors.grey[900],
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.Regular,
    marginLeft: 15,
  },
});
