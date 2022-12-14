import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {
  Input,
  BackIcon,
  CustomText,
  Button,
  PressableText,
} from '../../../components/Common';
import {styles} from './styles';
import Image from '../../../assets/Images/Login.svg';
import {useAppNavigation} from '../../../navigations/hook';

const Login = () => {
  const navigation = useAppNavigation();
  const onHandleNavigate = (name: string) => {
    navigation.navigate(name);
  };

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackIcon style={styles.backButton} onPress={()=>{}}/>
        <View style={[styles.imageBg]}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.logInContent}>
          <CustomText type="extra-bold">Login</CustomText>
          <View style={styles.formContainer}>
            <Input
              value={email}
              placeholder="Email Address / Phone Number"
              icon={'email'}
              type={'email'}
              onChangeText={text => setEmail(text)}
            />
            <View style={styles.password}>
              <Input
                value={password}
                placeholder="Password"
                icon="lock"
                type={'password'}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
          <View style={styles.terms}>
            <PressableText
              style={styles.linkTitle}
              onPress={() => onHandleNavigate('forget')}>
              Forgot Password?
            </PressableText>
          </View>
          <View style={styles.btn}>
            <Button label="Next" onPress={() => onHandleNavigate('otp')} />
          </View>
          <View style={styles.loginInfo}>
            <Text style={styles.textRegular}>Don't have account? </Text>
            <PressableText
              onPress={() => onHandleNavigate('signup')}
              style={styles.linkTitle}>
              Register
            </PressableText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
