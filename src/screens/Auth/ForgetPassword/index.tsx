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
import Image from '../../../assets/Images/forget.svg';
import {useAppNavigation} from '../../../navigations/hook';

const Forget = () => {
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
        <View style={styles.ForgetContent}>
          <CustomText>Forgot</CustomText>
          <CustomText>Password?</CustomText>
          <View style={styles.terms}>
            <Text style={styles.textRegular}>
              Don't worry! It happens. Please enter the address associated with
              you account.
            </Text>
          </View>

          <View style={styles.password}>
            <Input
              value={email}
              placeholder="Email Address / Phone Number"
              icon={'email'}
              type={'email'}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.btn}>
            <Button label="Next" onPress={() => onHandleNavigate('reset')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forget;
