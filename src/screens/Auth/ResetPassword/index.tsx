import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Input,
  CustomText,
  Button,
  BackIcon,
} from '../../../components/Common';
import {styles} from './styles';
import Image from '../../../assets/Images/reset.svg';
import {useAppNavigation} from '../../../navigations/hook';

const Reset = () => {
  const navigation = useAppNavigation();

  const onHandleNavigate = (name: string) => {
    navigation.navigate(name);
  };
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackIcon style={styles.backButton} onPress={()=>{}}/>
        <View style={[styles.imageBg]}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.ResetContent}>
          <CustomText type="extra-bold">Reset</CustomText>
          <CustomText type="extra-bold">Password</CustomText>
          <View style={styles.password}>
            <Input
              value={password}
              placeholder="New Password"
              icon={'lock'}
              type={'password'}
              onChangeText={text => setPassword(text)}
            />
            <View style={styles.password}>
              <Input
                value={confirmPassword}
                placeholder="Confirm New Password"
                icon="lock"
                type={'password'}
                onChangeText={text => setConfirmPassword(text)}
              />
            </View>
          </View>

          <View style={styles.btn}>
            <Button label="Submit" onPress={() => onHandleNavigate('home')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reset;
