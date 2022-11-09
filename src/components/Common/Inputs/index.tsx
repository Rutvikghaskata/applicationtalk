import {View, TextInput} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {InputProps} from './types';
import {Colors} from '../../../Theme';
import Email from '../../../assets/Icons/@.svg';
import FocusEmail from '../../../assets/Icons/@sky.svg';
import Lock from '../../../assets/Icons/lock.svg';
import FocusLock from '../../../assets/Icons/lock-sky.svg';
import User from '../../../assets/Icons/user.svg';
import Gender from '../../../assets/Icons/gender.svg';
import Home from '../../../assets/Icons/home.svg';
import {styles} from './styles';

const InputField: FunctionComponent<InputProps> = ({icon, type, ...props}) => {
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
          focus ? (
            <FocusEmail height="100%" />
          ) : (
            <Email height="100%" />
          )
        ) : icon === 'lock' ? (
          focus ? (
            <FocusLock height="100%" />
          ) : (
            <Lock height="100%" />
          )
        ) : icon === 'user' ? (
          <User height="100%" />
        ): icon === 'gender' ? (
          <Gender height="100%" />
        ): icon === 'home' ? (
          <Home height="100%" />
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
            color: focus ? Colors.sky : Colors.grey[500],
          },
        ]}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
};

export default InputField;
