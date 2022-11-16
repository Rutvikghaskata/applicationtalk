import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Theme';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primaryBlue[50]},
  card: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginBottom: 7,
    paddingVertical:15,
    paddingHorizontal:17,
    justifyContent:'space-between'
  },
  infoWrapper:{
    flexDirection: 'row',
  },
  profileImage:{
   height: 70,
   width: 70,
   borderRadius:5
  },
  info:{
   marginLeft:15,
   justifyContent:'space-between'
  },
  name: {
    color: Colors.sky,
    fontSize: 17,
    fontFamily: Fonts.Medium,
    marginBottom:7
  },
  infoText: {
    color: Colors.grey[500],
    fontSize: 13,
    fontFamily: Fonts.Regular,
  },
  statusWrapper:{
   height:'100%',
   alignItems: 'flex-end',
   justifyContent: 'space-between',
  },
  type:{
    height:20,
    width:25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status:{
    fontSize: 13,
    fontFamily: Fonts.Medium,
  },
  request:{
    color: Colors.sky,
  },
  confirmed:{
    color: Colors.green,
  },
  cancelled:{
    color: Colors.red.light,
  }
});
