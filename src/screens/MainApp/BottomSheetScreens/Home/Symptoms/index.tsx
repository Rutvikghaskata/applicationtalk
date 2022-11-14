import {CardProps, AppointmentProps} from '../types';
import {View, Text, FlatList} from 'react-native';
import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import {SymptomsCard, PressableText} from '../../../../../components/Common';
import {SymptomsData} from '../../../../../lib/utils/CommonUtils';
import LinearGradient from 'react-native-linear-gradient';

const Symptoms: FunctionComponent<AppointmentProps> = props => {
  return (
    <View style={styles.symptomsWrapper}>
      <View style={styles.symptomshead}>
        <Text style={styles.appTitle}>What are your symptoms?</Text>
        <PressableText style={styles.seeAll}>See all</PressableText>
      </View>
      <View style={styles.symptoms}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ffffff', 'transparent']}
          style={styles.linearBg}
        />
        <FlatList
          data={SymptomsData}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <SymptomsCard data={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

export default Symptoms;
