import {View, Text, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import Lifestyles from '../../../../assets/Icons/lifestyles.svg';
import MedicalLife from '../../../../assets/Icons/medicallife.svg';
import MyAddress from '../../../../assets/Icons/myaddress.svg';
import MyDoctors from '../../../../assets/Icons/mydoctors.svg';
import {MaleProfile} from '../../../../Theme/Images';

interface Props {
  type: string;
}
const Profile = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.roundBackground} />
      <View style={styles.profile}>
        <View style={styles.Profiler}>
          <MaleProfile />
        </View>
        <View>
          <Text style={styles.CustomText}>Viola Dunn</Text>
          <Text style={styles.CustomTextMin}>+91 25362 53645</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <Card type="doctor" />
          <Card type="lifestyle" />
        </View>
        <View style={styles.cardWrapper}>
          <Card type="medical" />
          <Card type="address" />
        </View>
      </View>
    </View>
  );
};

const Card: FunctionComponent<Props> = ({type}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.card}>
      <View style={styles.cardDetail}>
        <View style={styles.Icon}>
          {type === 'doctor' ? (
            <MyDoctors />
          ) : type === 'lifestyle' ? (
            <Lifestyles />
          ) : type === 'medical' ? (
            <MedicalLife />
          ) : type === 'address' ? (
            <MyAddress />
          ) : null}
        </View>
        <View>
          <Text style={styles.homeText}>
            {type === 'doctor'
              ? 'My Doctor'
              : type === 'lifestyle'
              ? 'Lifestyle Information'
              : type === 'medical'
              ? 'Medical Information'
              : type === 'address'
              ? 'My          Addresses'
              : null}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Profile;
