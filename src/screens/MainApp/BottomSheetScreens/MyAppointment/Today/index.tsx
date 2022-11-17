import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AppointmentData} from '../../../../../lib/utils/CommonUtils';
import {AppointmentCard} from '../../../../../components/Common'
const Today = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={AppointmentData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AppointmentCard data={item}/>
        )}
      />
    </View>
  );
};
export default Today;
