import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PressableText, SpecialistCard} from '../../../../../components/Common';
import {
  SpecialistData,
  HospitalsData,
} from '../../../../../lib/utils/CommonUtils';
import LinearGradient from 'react-native-linear-gradient';

const Specialist= () => {
  return <View style={styles.specialist}>
    <View style={styles.specialisthead}>
      <Text style={styles.appTitle}>Specialists</Text>
      <PressableText style={styles.seeAll}>See all</PressableText>
    </View>
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#ffffff', 'transparent']}
        style={styles.linearBg1} />
      <FlatList
        data={SpecialistData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginRight: index === HospitalsData.length - 1 ? 15 : 0,
            }}>
            <SpecialistCard data={item} />
          </View>
        )} />
    </View>
  </View>;
};

export default Specialist;
