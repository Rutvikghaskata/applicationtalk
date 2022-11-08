import {
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Image from '../../assets/Images/find-doctor.svg';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAppNavigation } from '../../navigations/hook';

const OnBoarding = () => {

  const navigation = useAppNavigation();

  const handleOnPress = () => {
    navigation.navigate('signup')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation="fadeIn"
        duration={1000}
        style={styles.imageBg}>
        <Image height="100%" width="100%" />
      </Animatable.View>
      <View style={styles.content}>
        <View>
          <Animatable.Text
            animation="fadeInDown"
            style={styles.title}
            duration={1000}
            delay={1000}>
            Let’s find a Doctor
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInDown"
            style={styles.description}
            duration={1000}
            delay={2000}>
            to start search nearby doctor
          </Animatable.Text>
        </View>
        <Animatable.View animation="bounceIn" duration={2500} delay={3000}>
          <TouchableOpacity style={styles.nextBtn} activeOpacity={0.9} onPress={handleOnPress}>
            <AntDesign name="right" color="white" size={27}/>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
