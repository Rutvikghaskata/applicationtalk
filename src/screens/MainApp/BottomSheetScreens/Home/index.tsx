import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {styles} from './styles';
import Appointment from './Appointments';
import Symptoms from './Symptoms';
import Doctors from './Doctors';
import Specialist from './Specialist';
import Hospitals from './Hospitals';
import Card from './Card';
import {Handler} from '../../../../config/lib';
import {SearchInput, PressableSearch} from '../../../../components/Common';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Colors} from '../../../../Theme';

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

export default Home;
