import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {styles} from './styles';
import {CardProps, AppointmentProps} from './types';
import {ClinicVisitBg, HomeVisitBg, Calender2} from '../../../../Theme/Icons';
import {MaleProfile} from '../../../../Theme/Images';
import {
  SearchInput,
  SymptomsCard,
  PressableText,
  DoctorCard,
  SpecialistCard,
  HospitalCard,
  PressableSearch,
} from '../../../../components/Common';
import {
  SymptomsData,
  DoctorsData,
  SpecialistData,
  HospitalsData,
} from '../../../../lib/utils/CommonUtils';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Colors} from '../../../../Theme';
import {Handler} from '../../../../config/lib';

const Home: FunctionComponent = () => {
  const [search, setSearch] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  Handler.addEventListener('hardwareBackPress', () => {
    if (showFilter) {
      setShowFilter(false);
      return true;
    }
    return false;
  });
  return (
    <View style={styles.homeContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            showFilter ? styles.headerBackground : styles.roundBackground,
          ]}
        />
        <View style={styles.searchWrapper}>
          {showFilter ? (
            <SearchInput
              value={search}
              placeholder="Search Doctor / Symptoms"
              onChangeText={text => setSearch(text)}
              style={{backgroundColor: 'white', borderWidth: 0}}
              autoFocus={true}
            />
          ) : (
            <PressableSearch
              placeholder="Search Doctor / Symptoms"
              onPress={() => setShowFilter(true)}
            />
          )}
        </View>
        {showFilter ? (
          <View style={styles.filterWrapper}>
            <TouchableOpacity style={styles.filter} activeOpacity={0.9}>
              <Icon name="location-outline" size={23} color={Colors.white} />
              <Text style={styles.filterTitle}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter} activeOpacity={0.9}>
              <SimpleLineIcons name="calendar" size={20} color={Colors.white} />
              <Text style={styles.filterTitle}>Date</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter} activeOpacity={0.9}>
              <Icon name="md-filter" size={23} color={Colors.white} />
              <Text style={styles.filterTitle}>Filters</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.cardWrapper}>
              <Card type="clinic" />
              <Card type="home" />
            </View>
            <Appointment />
          </>
        )}
        <Symptoms />
        <Doctors />
        <Specialist />
        <Hospitals />
      </ScrollView>
    </View>
  );
};

const Card: FunctionComponent<CardProps> = ({type, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
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
        <PressableText style={styles.seeAll}>See all</PressableText>
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

const Doctors = () => {
  return (
    <View style={styles.doctors}>
      <View style={styles.doctorHead}>
        <Text style={styles.appTitle}>Popular doctors</Text>
        <PressableText style={styles.seeAll}>See all</PressableText>
      </View>
      <FlatList
        data={DoctorsData}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={index % 2 == 0 ? styles.even : styles.odd}>
            <DoctorCard data={item} />
          </View>
        )}
      />
    </View>
  );
};

const Specialist = () => {
  return (
    <View style={styles.specialist}>
      <View style={styles.specialisthead}>
        <Text style={styles.appTitle}>Specialists</Text>
        <PressableText style={styles.seeAll}>See all</PressableText>
      </View>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ffffff', 'transparent']}
          style={styles.linearBg1}
        />
        <FlatList
          data={SpecialistData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View
              style={{
                marginRight: index === HospitalsData.length - 1 ? 15 : 0,
              }}>
              <SpecialistCard data={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const Hospitals = () => {
  return (
    <View style={styles.hospitalWrapper}>
      <View style={styles.hospitalhead}>
        <Text style={styles.appTitle}>Nearby Hospital</Text>
        <PressableText style={styles.seeAll}>See all</PressableText>
      </View>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ffffff', 'transparent']}
          style={styles.linearBg1}
        />
        <FlatList
          data={HospitalsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View
              style={{
                marginRight: index === HospitalsData.length - 1 ? 15 : 0,
              }}>
              <HospitalCard data={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
