import {Text, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Props} from './types';

const PressableText: FunctionComponent<Props> = props => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.9}>
      <Text style={props.style}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default PressableText;
