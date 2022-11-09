import React, {useState, FunctionComponent} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Input, Text, Button} from '../../../components/Common';
import {styles} from './styles';
import Image from '../../../assets/Images/sign-up.svg';

// interface Props {
//   email:string,
//   password: string,
// }

const Signup = () => {
  // const [state, setState] = useState<{email: string; password: string}>({
  //   email: '',
  //   password: '',
  // });
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.imageBg, {marginTop: 40}]}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.signUpContent}>
          <Text>Sign up</Text>
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
          <View style={{marginTop: 50}}>
            <Button label="Continue" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
