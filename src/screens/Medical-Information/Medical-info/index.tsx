import { SafeAreaView,View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles';
import {BackIcon} from '../../../components/Common'

const MedicalInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackIcon onPress={() =>{console.log()}} style={styles.backButton}/>
    </SafeAreaView>
  )
}

export default MedicalInfo