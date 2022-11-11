import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import {CardProps} from './types';
import {ClinicCardBg} from '../../../../Theme/Icons';
import {Button} from '../../../../components/Common';
import DoctorCard from '../../../../components/Common/DoctorCard';

const Card: FunctionComponent<CardProps> = ({type, ...props}) => {
  if (type === 'clinic') {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={{height: '100%', width: '100%'}}>
          <ClinicCardBg height="100%" />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity>
        <View></View>
      </TouchableOpacity>
    );
  }
};

const Home = () => {
  return (
    <View>
      <Doctors />
    </View>
  );
};

const Data = [
  {
    id: '1',
    name: 'Dr. Chris Frazier',
    specialization: 'Pediatrician',
    isLike: 'false',
    rating: 5.1,
    gender: 'female',
  },
  {
    id: '2',
    name: 'Dr. Viola Dunn',
    specialization: 'Pediatrician',
    isLike: 'true',
    rating: 3.6,
    gender: 'male',
  },
  {
    id: '3',
    name: 'Dr. Chris Frazier',
    specialization: 'Pediatrician',
    isLike: 'false',
    rating: 4.7,
    gender: 'female',
  },
  {
    id: '4',
    name: 'Dr. Viola Dunn',
    specialization: 'Pediatrician',
    isLike: 'false',
    rating: 3.5,
    gender: 'male',
  },
];
const Doctors = () => {
  return (
    <View style={styles.cards}>
      <FlatList
        data={Data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DoctorCard data={item}/>
        )}
      />
    </View>
  );
};

export default Home;
