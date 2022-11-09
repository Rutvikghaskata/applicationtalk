import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Input,Text} from '../../../components/Common';
import {styles} from './styles';
import Image from '../../../assets/Images/sign-up.svg';

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.imageBg,{marginTop:40}]}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.signUpContent}>
          <Text style={styles.title}>
            Sign up
          </Text>
          <Input 
            placeholder="Email Address / Phone Number"
            icon="email"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
