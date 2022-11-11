import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {styles} from './styles';
import {CardProps, AppointmentProps} from './types';
import {ClinicVisitBg, HomeVisitBg, Calender2} from '../../../../Theme/Icons';
import {MaleProfile} from '../../../../Theme/Images';
import {SearchInput,SymptomsCard} from '../../../../components/Common';
import Feather from 'react-native-vector-icons/Feather';
import {SymptomsData} from '../../../../lib/utils/CommonUtils';

const Home: FunctionComponent = () => {
  const [search, setSearch] = useState<string>();
  return (
    <View style={styles.homeContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBackground} />
        <View style={styles.searchWrapper}>
          <SearchInput
            value={search}
            placeholder="Search Doctor / Symptoms"
            onChangeText={text => setSearch(text)}
            style={{backgroundColor: 'white', borderWidth: 0}}
          />
        </View>
        <View style={styles.cardWrapper}>
          <Card type="clinic" />
          <Card type="home" />
        </View>
        <Appointment />
        <Symptoms />
      </ScrollView>
    </View>
  );
};

const Card: FunctionComponent<CardProps> = ({type, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.card, type === 'clinic' ? styles.clinic : styles.home]}>
      <View style={styles.Icon}>
        {type === 'clinic' ? (
          <ClinicVisitBg height="100%" />
        ) : (
          <HomeVisitBg height="100%" />
        )}
      </View>
      <View>
        <Text
          style={[
            styles.title,
            type === 'clinic' ? styles.whiteText : styles.homeTitle,
          ]}>
          {type === 'clinic' ? 'Clinic Visit' : 'Home Visit'}
        </Text>
        <Text
          style={[
            styles.description,
            type === 'clinic' ? styles.whiteText : styles.homeText,
          ]}>
          {type === 'clinic' ? 'Make an appointment' : 'Call the doctor home'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

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
        <Text style={styles.seeAll}>See all</Text>
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

const Symptoms: FunctionComponent<AppointmentProps> = props => {
  return (
    <View style={styles.appointmentWrapper}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.appTitle}>What are your symptoms?</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.symptoms}>
        <FlatList
          data={SymptomsData}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item,index}) =>(
            <SymptomsCard data={item} index={index}/>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
