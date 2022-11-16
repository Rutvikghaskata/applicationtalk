import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AppointmentData} from '../../../../../lib/utils/CommonUtils';
import {Image} from 'react-native';
import {Video, Audio,Clinic} from '../../../../../Theme/Icons';

const Today = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={AppointmentData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.9}>
            <View style={styles.infoWrapper}>
              <Image source={{uri: item.imgUrl}} style={styles.profileImage} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.infoText}>{item.date}</Text>
                <Text style={styles.infoText}>{item.reason}</Text>
              </View>
            </View>
            <View style={styles.statusWrapper}>
              <View style={styles.type}>
                {item.type === 'video' ? (
                  <Video height="100%" />
                ) : item.type === 'audio' ? (
                  <Audio height="100%" />
                ) : (
                  <Clinic height="100%" />
                )}
              </View>
              <View>
                <Text
                  style={[
                    styles.status,
                    item.status === 1
                      ? styles.request
                      : item.status === 2
                      ? styles.confirmed
                      : item.status === 3
                      ? styles.cancelled
                      : null,
                  ]}>
                  {item.status === 1
                    ? 'Requested'
                    : item.status === 2
                    ? 'Confirmed'
                    : item.status === 3
                    ? 'Cancelled'
                    : null}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Today;
