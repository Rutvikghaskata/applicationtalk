import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/Images/find-doctor.svg';

const Tab = createBottomTabNavigator();

const Screen1 = () => {
  return (
    <View>
      <Logo />
    </View>
  );
};
const Screen2 = () => {
  return (
    <View>
      <Text>Screen1</Text>
    </View>
  );
};
const MiddleScreen = () => {
  return (
    <View>
      <Text>Screen1</Text>
    </View>
  );
};
const Screen3 = () => {
  return (
    <View>
      <Text>Screen1</Text>
    </View>
  );
};
const Screen4 = () => {
  return (
    <View>
      <Text>Screen1</Text>
    </View>
  );
};
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
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 70,
          ...styles.shadow,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        // title: '',
        // headerLeft: props => (
        //     <View style={{backgroundColor:'red',height:'100%',width:200}}>
        //       <Text style={{color: 'red',}}></Text>  
        //     </View>
          
        // ),
         headerShown: false,
      }}>
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../assets/Images/home-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0094DE' : '#9CB6C3',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../assets/Images/home-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0094DE' : '#9CB6C3',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MiddleScreen"
        component={MiddleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../assets/Images/home-icon.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#ffff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../assets/Images/home-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0094DE' : '#9CB6C3',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../assets/Images/home-icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#0094DE' : '#9CB6C3',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
