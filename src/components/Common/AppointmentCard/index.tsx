import { View, Text,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import {styles} from './styles'
import {Video, Audio,Clinic} from '../../../Theme/Icons';

const AppointmentCard = ({data}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
    <View style={styles.infoWrapper}>
      <Image source={{uri: data.imgUrl}} style={styles.profileImage} />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.infoText}>{data.date}</Text>
        <Text style={styles.infoText}>{data.reason}</Text>
      </View>
    </View>
    <View style={styles.statusWrapper}>
      <View style={styles.type}>
        {data.type === 'video' ? (
          <Video height="100%" />
        ) : data.type === 'audio' ? (
          <Audio height="100%" />
        ) : (
          <Clinic height="100%" />
        )}
      </View>
      <View>
        <Text
          style={[
            styles.status,
            data.status === 1
              ? styles.request
              : data.status === 2
              ? styles.confirmed
              : data.status === 3
              ? styles.cancelled
              : null,
          ]}>
          {data.status === 1
            ? 'Requested'
            : data.status === 2
            ? 'Confirmed'
            : data.status === 3
            ? 'Cancelled'
            : null}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}

export default AppointmentCard