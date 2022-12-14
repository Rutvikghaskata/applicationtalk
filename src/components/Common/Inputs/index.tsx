import {View, TextInput, Pressable} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {InputProps} from './types';
import {Colors} from '../../../Theme';
import Email from '../../../assets/Icons/@.svg';
import FocusEmail from '../../../assets/Icons/@sky.svg';
import Lock from '../../../assets/Icons/lock.svg';
import FocusLock from '../../../assets/Icons/lock-sky.svg';
import User from '../../../assets/Icons/user.svg';
import FocusUser from '../../../assets/Icons/user-sky.svg';
import Gender from '../../../assets/Icons/gender.svg';
import FocusGender from '../../../assets/Icons/gender-sky.svg';
import Home from '../../../assets/Icons/home.svg';
import FocusHome from '../../../assets/Icons/home-sky.svg';
import Calender from '../../../assets/Icons/calender.svg';
import FocusCalender from '../../../assets/Icons/calender-sky.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const InputField: FunctionComponent<InputProps> = ({icon, type, ...props}) => {
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(false);

  const customOnFocus = () => {
    props?.onFocus;
    setFocus(true);
  };
  const customOnBlur = () => {
    props?.onBlur;
    setFocus(false);
  };
  const handelPassword = () => {
    setShow(!show);
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
          focus ? (
            <FocusUser height="100%" />
          ) : (
            <User height="100%" />
          )
        ) : icon === 'gender' ? (
          focus ? (
            <FocusGender height="100%" />
          ) : (
            <Gender height="100%" />
          )
        ) : icon === 'home' ? (
          focus ? (
            <FocusHome height="100%" />
          ) : (
            <Home height="100%" />
          )
        ) : icon === 'calender' ? (
          focus ? (
            <FocusCalender height="100%" />
          ) : (
            <Calender height="100%" />
          )
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
        secureTextEntry={type === 'password' ? show ? true : false : undefined}
      />
      {type === 'password' &&
        (show ? (
          <Pressable onPress={handelPassword} style={[styles.eyeIcon]}>
            <Icon
              name="eye-off-outline"
              size={22}
              color={focus ? Colors.sky : Colors.grey[500]}
            />
          </Pressable>
        ) : (
          <Pressable onPress={handelPassword} style={[styles.eyeIcon]}>
            <Icon
              name="eye-outline"
              size={22}
              color={focus ? Colors.sky : Colors.grey[500]}
            />
          </Pressable>
        ))}
    </View>
  );
};

export default InputField;
