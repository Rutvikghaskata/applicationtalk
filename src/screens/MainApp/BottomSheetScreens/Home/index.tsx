import {View, ScrollView, FlatList} from 'react-native';
import React, {useState, FunctionComponent} from 'react';
import {styles} from './styles';
import {SearchInput} from '../../../../components/Common';
import Appointment from './Appointments';
import Symptoms from './Symptoms';
import Doctors from './Doctors';
import Specialist from './Specialist';
import Hospitals from './Hospitals';
import Card from './Card';
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
        <Doctors />
        <Specialist />
        <Hospitals />
      </ScrollView>
    </View>
  );
};

export default Home;
