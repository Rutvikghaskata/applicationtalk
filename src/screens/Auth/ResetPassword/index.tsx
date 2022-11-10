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
  PressableText,
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
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackIcon style={styles.backButton} />
        <View style={[styles.imageBg]}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.ResetContent}>
          <CustomText>Reset</CustomText>
          <CustomText>Password</CustomText>
          <View style={styles.password}>
            <Input
              value={password}
              placeholder="New Password"
              icon={'lock'}
              type={'password'}
              onChangeText={text => setEmail(text)}
            />
            <View style={styles.password}>
              <Input
                value={password}
                placeholder="Confirm New Password"
                icon="lock"
                type={'password'}
                onChangeText={text => setPassword(text)}
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
