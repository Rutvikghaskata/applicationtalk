import { TouchableOpacity, StyleSheet } from 'react-native'
import React,{FunctionComponent} from 'react'
import Image from '../../../assets/Icons/back.svg';
import {BackIconProps} from './type'
import {useAppNavigation} from '../../../navigations/hook';
const BackIcon:FunctionComponent<BackIconProps> = ({...props}) => {
  const navigation = useAppNavigation();
  const onHandleBack = () => {
  navigation.goBack();
};
  return (
    <TouchableOpacity style={[styles.backButton,props.style]} onPress={onHandleBack}>
      <Image height="100%"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton:{

  }
})
export default BackIcon