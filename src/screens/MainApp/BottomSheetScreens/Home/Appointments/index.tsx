import {View, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import {AppointmentProps} from '../types';
import {PressableText} from '../../../../../components/Common';
import {Calender2} from '../../../../../Theme/Icons';
import {MaleProfile} from '../../../../../Theme/Images';

const Appointment: FunctionComponent<AppointmentProps> = props => {
  return (
    <View style={styles.appointmentWrapper}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.appTitle}>Appointment today</Text>
         {/* examples of popup */}
        <PressableText style={styles.seeAll} onPress={props.onHandleModel}>
          See all
        </PressableText>
      </View>
      <View style={styles.appointmentCard}>
        <View style={styles.doctorInfo}>
          <View style={styles.profileImage}>
            <MaleProfile height="100%" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.title, styles.whiteText]}>
              Dr. Chris Frazier
            </Text>
            <Text style={[styles.description, styles.whiteText]}>
              Pediatrician
            </Text>
          </View>
        </View>
        <View style={styles.scheduleInfoWrapper}>
          <View style={styles.icon}>
            <Calender2 height="100%" />
          </View>
          <Text style={styles.scheduleText}>
            Monday, July 29 at 11:00 - 12:00 AM
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Appointment;
