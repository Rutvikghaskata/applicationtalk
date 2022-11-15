import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {styles} from './styles';
import {CardProps} from '../types';
import {ClinicVisitBg, HomeVisitBg} from '../../../../../Theme/Icons';

const Card: FunctionComponent<CardProps> = ({type, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.card, type === 'clinic' ? styles.clinic : styles.home]}>
      <View style={styles.Icon}>
        {type === 'clinic' ? (
          <ClinicVisitBg height="100%" />
        ) : (
          <HomeVisitBg height="100%" />
        )}
      </View>
      <View>
        <Text
          style={[
            styles.title,
            type === 'clinic' ? styles.whiteText : styles.homeTitle,
          ]}>
          {type === 'clinic' ? 'Clinic Visit' : 'Home Visit'}
        </Text>
        <Text
          style={[
            styles.description,
            type === 'clinic' ? styles.whiteText : styles.homeText,
          ]}>
          {type === 'clinic' ? 'Make an appointment' : 'Call the doctor home'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
