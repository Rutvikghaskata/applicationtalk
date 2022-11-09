import React from 'react';
import {SafeAreaView, View,} from 'react-native';
import {styles} from '../styles';
import Image from '../../../../assets/Images/personal-details.svg';
import {BackIcon,CustomText} from '../../../../components/Common';
import {useAppNavigation} from '../../../../navigations/hook';

const Signup = () => {
  const navigation = useAppNavigation();

  const onHandleBack = () => {
    navigation.navigate('signup');
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackIcon onPress={onHandleBack} style={styles.backButton} />
      <View style={styles.imageBg}>
        <Image height="100%" width="100%" />
      </View>
      <View style={styles.detailsContent}>
        <CustomText>Personal Details</CustomText>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
