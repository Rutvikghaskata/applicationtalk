import {View, Text, TextInput} from 'react-native';
import React, {FunctionComponent} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {SearchInputProps} from './types';
import { Colors } from '../../../Theme';

const SearchInput: FunctionComponent<SearchInputProps> = props => {
  return (
    <View style={[styles.serachInputStyle, props.style]}>
      <Ionicons name="md-search-outline" size={22} color={Colors.grey[500]}/>
      <TextInput
        {...props}
        style={styles.textInputStyle}
        placeholderTextColor={Colors.grey[500]}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default SearchInput;
