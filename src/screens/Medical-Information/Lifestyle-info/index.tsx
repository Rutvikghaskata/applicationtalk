import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  BackIcon,
  CustomText,
  SelectInput,
  Button,
} from '../../../components/Common';
import {useAppNavigation} from '../../../navigations/hook';

const LifeStyleInfo = () => {
  const navigation = useAppNavigation();
  const onHandleNavigate = (name: string) => {
    navigation.navigate(name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackIcon
        onPress={() => {
          console.log();
        }}
        style={styles.backButton}
      />
      <View style={styles.content}>
        <View>
          <CustomText type="medium" style={styles.title}>
            Lifestyle information
          </CustomText>
          <View style={styles.selectWrapper1}>
            <SelectInput placeholder="Smoking" icon="smoking" />
          </View>
          <View style={styles.selectWrapper}>
            <SelectInput placeholder="Alcohol" icon="alcohol" />
          </View>
          <View style={styles.selectWrapper}>
            <SelectInput placeholder="Activity Level" icon="activity" />
          </View>
          <View style={styles.selectWrapper}>
            <SelectInput placeholder="Food Preferences" icon="food" />
          </View>
          <View style={styles.selectWrapper}>
            <SelectInput placeholder="Occupation" icon="job" />
          </View>
        </View>
        <View>
        <Button label="Next" onPress={() => onHandleNavigate('symptoms')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LifeStyleInfo;
