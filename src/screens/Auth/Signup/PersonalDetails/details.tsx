import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {styles} from '../styles';
import Image from '../../../../assets/Images/personal-details.svg';
import {
  BackIcon,
  CustomText,
  Input,
  Button,
} from '../../../../components/Common';
import {useAppNavigation} from '../../../../navigations/hook';

const PersonalDetails = () => {
  const navigation = useAppNavigation();
  const [firstName, setFirstname] = useState<string>();
  const [lastName, setLastname] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [dob, setDob] = useState<string>();
  const [address, setAddress] = useState<string>();
  const onHandleNavigate = (name: string) => {
    navigation.navigate(name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BackIcon style={styles.backButton} />
        <View style={styles.imageBg}>
          <Image height="100%" width="100%" />
        </View>
        <View style={styles.detailsContent}>
          <CustomText>Personal Details</CustomText>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.MultiInputContainer}>
            <View style={styles.nameInput}>
              <Input
                value={firstName}
                placeholder="First Name"
                icon={'user'}
                type={'text'}
                onChangeText={text => setFirstname(text)}
              />
            </View>
            <View style={styles.nameInput}>
              <Input
                value={lastName}
                placeholder="Last Name"
                icon={'none'}
                type={'text'}
                onChangeText={text => setLastname(text)}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Input
              value={gender}
              placeholder="Gender"
              icon={'gender'}
              type={'text'}
              onChangeText={text => setGender(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              value={dob}
              placeholder="Date of Birth"
              icon={'calender'}
              type={'text'}
              onChangeText={text => setDob(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              value={address}
              placeholder="Address"
              icon={'home'}
              type={'text'}
              onChangeText={text => setAddress(text)}
            />
          </View>
          <View style={styles.nextBtn}>
            <Button label="Next" onPress={() => onHandleNavigate('medicalInfo')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDetails;
