import {View, TextInput} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {InputProps} from './types';
import {Colors} from '../../../Theme';
import Icons from '../../../assets/Icons/user.svg';
import {styles} from './styles';

const InputField: FunctionComponent<InputProps> = ({icon, ...props}) => {
  const [focus, setFocus] = useState(false);

  const customOnFocus = () => {
    props?.onFocus;
    setFocus(true);
  };
  const customOnBlur = () => {
    props?.onBlur;
    setFocus(true);
  };

  return (
    <View style={styles.InputWrapper}>
      <View style={styles.LeftIcon}>
        <Icons height='100%'/>
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
