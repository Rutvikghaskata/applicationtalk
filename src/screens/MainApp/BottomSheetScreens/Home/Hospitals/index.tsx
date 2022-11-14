import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PressableText, HospitalCard} from '../../../../../components/Common';
import {HospitalsData} from '../../../../../lib/utils/CommonUtils';
import LinearGradient from 'react-native-linear-gradient';

 const Hospitals = () => {
  return <View style={styles.hospitalWrapper}>
     <View style={styles.hospitalhead}>
       <Text style={styles.appTitle}>Nearby Hospital</Text>
       <PressableText style={styles.seeAll}>See all</PressableText>
     </View>
     <View>
       <LinearGradient
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 0 }}
         colors={['#ffffff', 'transparent']}
         style={styles.linearBg1} />
       <FlatList
         data={HospitalsData}
         horizontal
         showsHorizontalScrollIndicator={false}
         keyExtractor={item => item.id}
         renderItem={({ item, index }) => (
           <View
             style={{
               marginRight: index === HospitalsData.length - 1 ? 15 : 0,
             }}>
             <HospitalCard data={item} />
           </View>
         )} />
     </View>
   </View>;
};
 
export default Hospitals;