import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FDFDFD',
  },
  headerBackground: {
    position: 'absolute',
    alignSelf: 'center',
    height: responsiveHeight(15),
    width: responsiveWidth(100),
    backgroundColor: Colors.primaryBlue[400],
  },
  roundBackground: {
    position: 'absolute',
    alignSelf: 'center',
    height: responsiveHeight(70),
    width: responsiveWidth(130),
    backgroundColor: Colors.primaryBlue[400],
    borderRadius: 300,
    top: -responsiveHeight(49),
  },
  searchWrapper: {
    paddingHorizontal: responsiveWidth(3.5),
    marginBottom: responsiveHeight(2.5),
  },
  filterWrapper:{
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: Colors.sky,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  filter:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterTitle:{
    fontSize:15,
    color:Colors.white,
    fontFamily: Fonts.Medium,
    marginLeft:7
  },
  cardWrapper: {
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(3.5),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  }
});
