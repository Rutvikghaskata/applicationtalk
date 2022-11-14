import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Image from '../../../../../assets/Images/find-doctor.svg';
import Find from '../../../../../assets/Images/find-d.svg';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAppNavigation} from '../../../../../navigations/hook';

const FindLocation = () => {
  const navigation = useAppNavigation();

  const handleOnPress = () => {
    navigation.navigate('searchMap');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.TitlesContainer}>
          <View style={styles.ImageIcon}>
            <Find />
          </View>
          <Animatable.Text
            animation="fadeInDown"
            style={styles.title}
            duration={800}
            delay={1000}>
            Find Doctors
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInDown"
            style={styles.BigTitle}
            duration={800}
            delay={1000}>
            With your hands
          </Animatable.Text>
          <Animatable.Text
            animation="fadeInDown"
            style={styles.description}
            duration={800}
            delay={1800}>
            finding a doctor is easier to do without having to go to the
            hospital
          </Animatable.Text>
        </View>
        <Animatable.View animation="fadeIn" duration={1000} delay={2600}>
          <TouchableOpacity
            style={styles.nextBtn}
            activeOpacity={0.9}
            onPress={handleOnPress}>
            <AntDesign name="right" color="white" size={27} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <Animatable.View
        animation="fadeIn"
        duration={1000}
        style={styles.imageBg}>
        <Image height="100%" width="100%" />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default FindLocation;
