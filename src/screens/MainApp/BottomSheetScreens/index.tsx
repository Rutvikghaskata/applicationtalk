import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Colors} from '../../../Theme';
import {
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Home,AppointmentScreen,SearchMap,PillScreen,ProfileScreen} from '../../../screens';
import Header from '../../../components/header';
import {
  HomeTab,
  FocusHomeTab,
  Appointment,
  FocusAppointment,
  Pill,
  FocusPill,
  Profile,
  FocusProfile,
  MapSearch,
} from '../../../Theme/Icons';
const Tab = createBottomTabNavigator();

export type Props = {
  children: string;
  onPress: any;
};

const CustomTabBarButton: React.FC<Props> = ({children, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#0094DE',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <StatusBar
        // hidden
        backgroundColor={Colors.primaryBlue[400]}
        barStyle="light-content"
      />
      <Header navigation={navigation} />
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,           
          },
          title: '',
          headerShown: false,
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: responsiveWidth(6),
                  width: responsiveWidth(6),
                }}>
                {focused ? (
                  <FocusHomeTab height="100%" />
                ) : (
                  <HomeTab height="100%" />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="appointment"
          component={AppointmentScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: responsiveWidth(6),
                  width: responsiveWidth(6),
                }}>
                {focused ? (
                  <FocusAppointment height="100%" />
                ) : (
                  <Appointment height="100%" />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="searchMap"
          component={SearchMap}
          options={{
            tabBarIcon: ({}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: responsiveWidth(6),
                  width: responsiveWidth(6),
                }}>
                <MapSearch height="100%" />
              </View>
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="pill"
          component={PillScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: responsiveWidth(6),
                  width: responsiveWidth(6),
                }}>
                {focused ? <FocusPill height="100%" /> : <Pill height="100%" />}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: responsiveWidth(6),
                  width: responsiveWidth(6),
                }}>
                {focused ? (
                  <FocusProfile height="100%" />
                ) : (
                  <Profile height="100%" />
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;
