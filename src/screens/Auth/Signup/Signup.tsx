import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
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

// interface Props {
//   email:string,
//   password: string,
// }

const Signup = () => {
  // const [state, setState] = useState<{email: string; password: string}>({
  //   email: '',
  //   password: '',
  // });
  const navigation = useAppNavigation();

  const onHandleContinue = () => {
    navigation.navigate('personalDetails');
  };

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.imageBg, {marginTop: 40}]}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.signUpContent}>
          <CustomText>Sign up</CustomText>
          <View style={styles.formContainer}>
            <Input
              placeholder="Email Address / Phone Number"
              icon="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <View style={styles.password}>
              <Input
                placeholder="Password"
                icon="lock"
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
          <View style={styles.terms}>
            <Text style={styles.termsTitle}>
              By signing up, you're agree to our
            </Text>
            <PressableText style={styles.linkTitle}>
              Terms & Conditions
            </PressableText>
            <Text style={styles.termsTitle}> and</Text>
            <PressableText style={styles.linkTitle}>
              Privacy Policy
            </PressableText>
          </View>
          <View style={styles.btn}>
            <Button label="Continue" onPress={onHandleContinue} />
          </View>
          <View style={styles.loginInfo}>
            <Text style={styles.termsTitle}>Joined us before?</Text>
            <PressableText style={styles.linkTitle}>Login</PressableText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
