import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Menu, Notification} from '../../Theme/Icons';
import DownIcon from 'react-native-vector-icons/Entypo';

const Header = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.icon, styles.menuIcon]}
        activeOpacity={0.9}
        onPress={() => navigation.openDrawer()}>
        <Menu height="100%" />
      </TouchableOpacity>
      <View style={styles.location}>
        <Text style={styles.locTitle}>LOCATION</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locValue}>Sarthana Jakatnaka</Text>
          <DownIcon
            name="chevron-down"
            color="white"
            size={20}
            style={{marginLeft: 2}}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.icon}
        activeOpacity={0.9}>
        <Notification height="100%" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
