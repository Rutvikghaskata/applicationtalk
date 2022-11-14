import {TouchableOpacity, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {SearchProps} from './types';
import {Colors} from '../../../Theme';

const PressableSearch: FunctionComponent<SearchProps> = props => {
  return (
    <TouchableOpacity style={[styles.searchInputStyle, props.style]} activeOpacity={1} {...props}>
      <Ionicons name="md-search-outline" size={22} color={Colors.grey[500]} />
      <Text style={styles.placeholder}>{props.placeholder}</Text>
    </TouchableOpacity>
  );
};

export default PressableSearch;
