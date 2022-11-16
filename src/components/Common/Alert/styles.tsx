import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Theme';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000b9',
  },
  modalView: {
    height: 206,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    flexDirection: 'row',
    // width: '75%',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: Fonts.Regular,
    fontSize: 19,
    color: Colors.black,
  },
  modalTextFirst: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: Fonts.Medium,
    fontSize: 20,
    color: Colors.black,
  },
  YesButton: {
    height: 50,
    width: 160,
    backgroundColor: Colors.sky,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  YesText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: Fonts.Medium,
    fontSize: 16,
  },
  NoButton: {
    height: 50,
    width: 160,
    borderWidth: 1,
    borderColor: Colors.sky,
    borderRadius: 5,
    alignSelf: 'center',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NoText: {
    alignSelf: 'center',
    color: Colors.sky,
    fontFamily: Fonts.Medium,
    fontSize: 16,
  },
  like: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    backgroundColor: Colors.sky,
    top: -4,
    right: -6,
    position: 'absolute',
    borderRadius: 50,
    justifyContent: 'center',
  },
  likeStyle: {
    marginLeft: responsiveWidth(2.8),
    marginTop: responsiveHeight(0.5),
  },
});
