import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {
  Input,
  CustomText,
  Button,
  PressableText,
} from '../../../components/Common';
import {styles} from './styles';
import Image from '../../../assets/Images/sign-up.svg';
import {useAppNavigation} from '../../../navigations/hook';


const Signup = () => {
  const navigation = useAppNavigation();

  const onHandleNavigate = (name: string) => {
    navigation.navigate(name);
  };

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.imageBg, {marginTop: 50}]}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.signUpContent}>
          <CustomText type="extra-bold">Sign up</CustomText>
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
            <Text style={styles.textRegular}>
              By signing up, you're agree to our
            </Text>
            <PressableText style={styles.linkTitle}>
              Terms & Conditions
            </PressableText>
            <Text style={styles.textRegular}>and</Text>
            <PressableText style={styles.linkTitle}>
              Privacy Policy
            </PressableText>
          </View>
          <View style={styles.btn}>
            <Button
              label="Continue"
              onPress={() => onHandleNavigate('personalDetails')}
            />
          </View>
          <View style={styles.loginInfo}>
            <Text style={styles.textRegular}>Joined us before?</Text>
            <PressableText
              onPress={() => onHandleNavigate('signIn')}
              style={styles.linkTitle}>
              Login
            </PressableText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
