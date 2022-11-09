import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {styles} from './styles';
import Image from '../../../assets/Images/sign-up.svg';

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageBg}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.signUpContent}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
