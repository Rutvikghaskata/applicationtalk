import {View, Text, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import {styles} from './styles';
import {CardProps} from './types';
import {ClinicCardBg} from '../../../../Theme/Icons';
const Card: FunctionComponent<CardProps> = ({type, ...props}) => {
  if (type === 'clinic') {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={{ height:'100%',
        width:'100%',}}>
          <ClinicCardBg height="100%"/>
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
      <View style={styles.headerBackground}></View>
      <View style={{height:200,width:200,alignSelf:'center'}}>
        <Card type="clinic"/>
      </View>
    </View>
  );
};

export default Home;
