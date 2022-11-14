import React from 'react';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native';
import {screens} from '../../lib/utils/CommonUtils';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {MaleProfile} from '../../Theme/Images';
import {useDrawerStatus} from '@react-navigation/drawer';

const CustomDrawer = (props: {
  navigation: {
    closeDrawer: () => void;
    navigate: (arg0: string | null) => void;
  };
}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <View style={{flex: 1}}>
      <View style={styles.MainCustomDrawer}>
        <View style={styles.CustomDrawer}>
          <View style={styles.subCustomDrawer}>
            <MaleProfile height="100%" />
          </View>
          <Text style={styles.CustomText}>Viola Dunn</Text>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          style={[styles.DrawerOpen, {right: isDrawerOpen ? -23 : 0}]}
          onPress={() => props.navigation.closeDrawer()}>
          <Image source={require('../../assets/Images/Right.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.DrawerClose, {right: isDrawerOpen ? -14 : 0}]}
          onPress={() => props.navigation.closeDrawer()}>
          <Entypo name="chevron-thin-left" size={22} color={'white'} />
        </TouchableOpacity>
      </View>

      <View style={{height: 600}}>
        <FlatList
          data={screens}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            const Icon = item.icon;
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => props.navigation.navigate(item.screen)}
                key={index}
                style={styles.MainDrawer}>
                <View style={styles.IconDrawer}>
                  <Icon height="100%" />
                </View>
                <Text style={styles.NameDrawer}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
export default CustomDrawer;
