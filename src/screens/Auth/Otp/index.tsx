import React, {useState} from 'react';
import {styles} from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Colors} from '../../../Theme';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import Image from '../../../assets/Images/otp.svg';
import {
  BackIcon,
  CustomText,
  Input,
  Button,
  PressableText,
} from '../../../components/Common';
import {useAppNavigation} from '../../../navigations/hook';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const Otp = () => {
  const navigation = useAppNavigation();
  const [otp, setOtp] = useState('');
  const onHandleNavigate = (name: string) => {
    navigation.navigate(name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BackIcon style={styles.backButton} onPress={()=>{}}/>
        <View style={styles.imageBg}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.OtpContent}>
          <CustomText type="extra-bold">Enter OTP</CustomText>
          <View style={styles.terms}>
            <Text style={styles.textRegular}>
              An 4 digit code has been sent to
            </Text>
            <Text style={styles.textRegular}>Phone Number / In you email</Text>
          </View>
          <OTPInputView
            style={{width: '80%', height: 60, marginTop: responsiveHeight(6)}}
            pinCount={4}
            selectionColor={Colors.black}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled={code => {
            //   setOtp(code);
            // }}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            onCodeChanged={code => {
              console.log(code);
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View style={styles.terms}>
            <Text style={styles.textRegularsmall}>
              if you don’t receive a code!
            </Text>
            <PressableText style={styles.linkTitle}>Resend</PressableText>
          </View>
          <View style={styles.btn}>
            <Button
              label="Next"
              onPress={() => onHandleNavigate('personalDetails')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Otp;
