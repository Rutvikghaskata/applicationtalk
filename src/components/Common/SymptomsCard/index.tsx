import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {TempEmoji, SnuffEmoji} from '../../../Theme/Icons';

const Card = ({data, index}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      <View style={styles.emoji}>
        {index % 2 == 0 ? (
          <TempEmoji height="100%" />
        ) : (
          <SnuffEmoji height="100%" />
        )}
      </View>
      <Text style={styles.symptoms}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default Card;
