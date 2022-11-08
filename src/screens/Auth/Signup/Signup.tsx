import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './styles';
import Image from '../../../assets/Images/sign-up.svg';

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBg}>
        <Image height="100%" width="100%" />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
