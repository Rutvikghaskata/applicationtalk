import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Hospital from '../../../assets/Images/hospital.svg';

const HospitalCard = (props: {
  data: {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
}) => {
  return (
    <TouchableOpacity style={[styles.card]} activeOpacity={0.9}>
      <View style={styles.image}>
        <Hospital width="100%" height="100%"/>
      </View>
      <View style={styles.name}>
        <Text style={styles.title}>{props.data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HospitalCard;
