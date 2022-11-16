import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors, Fonts} from '../../../../Theme';
import Header from '../../../../components/header';
import {useAppNavigation} from '../../../../navigations/hook';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Today from './Today';
import Upcoming from './Upcoming';
import Past from './Past';

const Tab = createMaterialTopTabNavigator();

const MyAppointment = () => {
  const navigation = useAppNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.primaryBlue[50]}}>
      <StatusBar
        backgroundColor={Colors.primaryBlue[400]}
        barStyle={'light-content'}
      />
      {/* <Header navigation={navigation} /> */}
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
          backgroundColor: Colors.sky,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-thin-left" color="white" size={25} />
        </TouchableOpacity>
        <Text
          style={{color: Colors.white, fontSize: 18, fontFamily: Fonts.Medium}}>
          My Appointments
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign name="message1" color="white" size={25} />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.sky,
          tabBarInactiveTintColor: Colors.grey[500],
          tabBarLabelStyle: {
            fontFamily: Fonts.Medium,
            fontSize: 15,
            textTransform: 'capitalize',
            marginTop: 8,
          },
          tabBarStyle: {
            height: 55,
            backgroundColor: Colors.white,
            elevation: 0,
            marginVertical: 5,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.sky,
            height: 3,
            borderRadius: 3,
          },
          tabBarPressColor: '#0094DE20',
        }}>
        <Tab.Screen
          name="Today"
          component={Today}
          options={{tabBarLabel: "Today's"}}
        />
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          options={{tabBarLabel: 'Upcoming'}}
        />
        <Tab.Screen
          name="Past"
          component={Past}
          options={{tabBarLabel: 'Past'}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MyAppointment;
