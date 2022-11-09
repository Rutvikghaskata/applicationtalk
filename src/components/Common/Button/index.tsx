import {TouchableOpacity,Text} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {ButtonProps} from './types';
import {styles} from './styles';

const ButtonField: FunctionComponent<ButtonProps> = ({label, ...props}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.9}
      style={styles.buttonWrapper}>
        <Text style={styles.label}>
          {label}
        </Text>
      </TouchableOpacity>
  );
};

export default ButtonField;
