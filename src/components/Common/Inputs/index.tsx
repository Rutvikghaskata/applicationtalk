import {View, TextInput} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {InputProps} from './types';
import {Colors} from '../../../Theme';
import Email from '../../../assets/Icons/@.svg';
import Lock from '../../../assets/Icons/lock.svg';
import {styles} from './styles';

const InputField: FunctionComponent<InputProps> = ({icon, ...props}) => {
  const [focus, setFocus] = useState(false);

  const customOnFocus = () => {
    props?.onFocus;
    setFocus(true);
  };
  const customOnBlur = () => {
    props?.onBlur;
    setFocus(false);
  };

  return (
    <View style={styles.InputWrapper}>
      <View style={styles.LeftIcon}>
        {icon === 'email' ? (
          <Email height="100%" />
        ) : icon === 'lock' ? (
          <Lock height="100%" />
        ) : null}
      </View>
      <TextInput
        {...props}
        placeholderTextColor={Colors.grey[500]}
        style={[
          styles.Input,
          props.style,
          {
            borderColor: focus ? Colors.sky : Colors.grey[200],
          },
        ]}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
      />
    </View>
  );
};

export default InputField;
