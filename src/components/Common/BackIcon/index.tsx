import { TouchableOpacity, StyleSheet } from 'react-native'
import React,{FunctionComponent} from 'react'
import Image from '../../../assets/Icons/back.svg';
import {BackIconProps} from './type'

const BackIcon:FunctionComponent<BackIconProps> = ({onPress,...props}) => {
  return (
    <TouchableOpacity style={[styles.backButton,props.style]} onPress={onPress}>
      <Image height="100%"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton:{

  }
})
export default BackIcon