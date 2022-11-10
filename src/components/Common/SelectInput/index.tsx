import {
  View,
  TextInput,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {InputProps} from './types';
import {Colors} from '../../../Theme';
import Nose from '../../../assets/Icons/narsal.svg';
import Mask from '../../../assets/Icons/sickness.svg';
import Injury from '../../../assets/Icons/injury.svg';
import Surgery from '../../../assets/Icons/surgery.svg';
import Smoking from '../../../assets/Icons/smoking.svg';
import Alcohol from '../../../assets/Icons/alcohol.svg';
import Activity from '../../../assets/Icons/activity.svg';
import Food from '../../../assets/Icons/food.svg';
import Occupation from '../../../assets/Icons/occupation.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';

const InputField: FunctionComponent<InputProps> = ({icon, type, ...props}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const customOnFocus = () => {
    props?.onFocus;
    setFocus(true);
  };
  const customOnBlur = () => {
    props?.onBlur;
    setFocus(false);
  };

  const options = [
    {
      value: 'option1',
      label: 'option1',
    },
    {
      value: 'option2',
      label: 'option2',
    },
    {
      value: 'option3',
      label: 'option3',
    },
    {
      value: 'option4',
      label: 'option4',
    },
    {
      value: 'option5',
      label: 'option5',
    },
    {
      value: 'option6',
      label: 'option6',
    },
    {
      value: 'option7',
      label: 'option7',
    },
  ];
  return (
    <>
      <View style={styles.InputWrapper}>
        <View style={styles.LeftIcon}>
          {icon === 'nose' ? (
            focus ? (
              <Nose height="100%" />
            ) : (
              <Nose height="100%" />
            )
          ) : icon === 'sickness' ? (
            focus ? (
              <Mask height="100%" />
            ) : (
              <Mask height="100%" />
            )
          ) : icon === 'injury' ? (
            focus ? (
              <Injury height="100%" />
            ) : (
              <Injury height="100%" />
            )
          ) : icon === 'surgery' ? (
            focus ? (
              <Surgery height="100%" />
            ) : (
              <Surgery height="100%" />
            )
          ) : icon === 'smoking' ? (
            focus ? (
              <Smoking height="100%" />
            ) : (
              <Smoking height="100%" />
            )
          ) : icon === 'alcohol' ? (
            focus ? (
              <Alcohol height="100%" />
            ) : (
              <Alcohol height="100%" />
            )
          ) : icon === 'activity' ? (
            focus ? (
              <Activity height="100%" />
            ) : (
              <Activity height="100%" />
            )
          ) : icon === 'food' ? (
            focus ? (
              <Food height="100%" />
            ) : (
              <Food height="100%" />
            )
          ) : icon === 'activity' ? (
            focus ? (
              <Activity height="100%" />
            ) : (
              <Activity height="100%" />
            )
          ) : icon === 'job' ? (
            focus ? (
              <Occupation height="100%" />
            ) : (
              <Occupation height="100%" />
            )
          ) : null}
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setVisible(!visible)}
          style={[
            styles.valueField,
            {
              borderColor: visible ? Colors.sky : Colors.grey[200],
            },
          ]}>
          <Text>{value ? value : props.placeholder}</Text>
        </TouchableOpacity>
        <Entypo
          name="chevron-down"
          style={[
            styles.downIcon,
            {transform: [{rotate: focus ? '180deg' : '0deg'}]},
          ]}
          size={18}
          color={focus ? Colors.sky : Colors.grey[500]}
        />
      </View>
      {visible && (
        <View style={styles.selectContainer}>
          <ScrollView>
            {options.map((option, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.selectOptions}
                  activeOpacity={0.7}
                  onPress={() => {
                    setValue(option.label);
                    setTimeout(() => {}, 500);
                    setVisible(false);
                  }}>
                  <Text
                    style={[
                      styles.label,
                      option.label === value && styles.selected,
                    ]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default InputField;
