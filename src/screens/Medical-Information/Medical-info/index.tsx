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

const MedicalInfo = () => {
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
            Medical information
          </CustomText>
          <View style={styles.selectWrapper1}>
            <SelectInput placeholder="Allergies" icon="nose" />
          </View>
          <View style={styles.selectWrapper}>
            <SelectInput placeholder="Chronic Illness" icon="sickness" />
          </View>
          <View style={styles.selectWrapper}>
            <SelectInput placeholder="Injuries" icon="injury" />
          </View>
          <View style={styles.selectWrapper}>
            <SelectInput placeholder="Surgeries" icon="surgery" />
          </View>
        </View>
        <View>
          <Button
            label="Next"
            onPress={() => onHandleNavigate('lifeStyleInfo')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MedicalInfo;
