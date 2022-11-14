import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PressableText, DoctorCard} from '../../../../../components/Common';
import {DoctorsData} from '../../../../../lib/utils/CommonUtils';

 const Doctors = () => {
  return <View style={styles.doctors}>
     <View style={styles.doctorhead}>
       <Text style={styles.appTitle}>Popular doctors</Text>
       <PressableText style={styles.seeAll}>See all</PressableText>
     </View>
     <FlatList
       data={DoctorsData}
       numColumns={2}
       keyExtractor={item => item.id}
       renderItem={({ item }) => <DoctorCard data={item} />} />
   </View>;
};
 
export default Doctors;