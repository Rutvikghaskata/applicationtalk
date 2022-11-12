import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const SpecialistCard = (props: {
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
    themeColor:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    img:
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
  const Image = props.data.img
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: props.data.themeColor}]}
      activeOpacity={0.9}>
      <View style={styles.image}>
        <Image height="100%" />
      </View>
      <Text style={styles.title}>{props.data.name}</Text>
    </TouchableOpacity>
  );
};

export default SpecialistCard;
