import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {TabScreens} from '../../screens';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native';
import {Colors, Fonts} from '../../Theme';
import Entypo from 'react-native-vector-icons/Entypo';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {MaleProfile} from '../../Theme/Images';
import {DrawerIcon} from '../../Theme/Icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="tab"
        screenOptions={{headerShown: false}}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="tab" component={TabScreens} />
      </Drawer.Navigator>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={TabScreens} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

const CustomDrawer = props => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <View style={{flex: 1}}>
      {/* <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor:Colors.white}}
      > */}
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: Colors.sky,
          marginTop: -5,
        }}>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaleProfile height="100%" />
          </View>
          <Text
            style={{
              color: Colors.white,
              fontSize: responsiveFontSize(2.3),
              fontFamily: Fonts.Medium,
              marginLeft: 10,
            }}>
            Rutvik Ghaskata
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: 'absolute',
            right: isDrawerOpen ? -23 : 0,
            height: 100,
          }}
          onPress={() => props.navigation.closeDrawer()}>
          <Image source={require('../../assets/Images/Right.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: 'absolute',
            height: 100,
            justifyContent: 'center',
            zIndex: 1,
            right: isDrawerOpen ? -14 : 0,
          }}
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
                style={{
                  height: 60,
                  width: '100%',
                  borderBottomWidth: 1,
                  borderColor: Colors.grey[200],
                  flexDirection:'row',
                  alignItems:'center',
                }}>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft:15
                  }}>
                  <Icon height="100%" />
                </View>
                <Text
                  style={{
                    color: Colors.grey[900],
                    fontSize: responsiveFontSize(2),
                    fontFamily: Fonts.Regular,
                    marginLeft: 15,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {/* </DrawerContentScrollView> */}
    </View>
  );
};

const screens = [
  {
    id: '1',
    name: 'Home',
    screen: 'home',
    icon: DrawerIcon.Home,
  },
  {
    id: '2',
    name: 'Your Profile',
    screen: 'profile',
    icon: DrawerIcon.Profile,
  },
  {
    id: '3',
    name: 'Book Appointment',
    screen: 'appointment',
    icon: DrawerIcon.Appointment,
  },
  {
    id: '4',
    name: 'Health Feed',
    screen: 'home',
    icon: DrawerIcon.Health,
  },
  {
    id: '5',
    name: 'My Payment',
    screen: 'home',
    icon: DrawerIcon.Payment,
  },
  {
    id: '6',
    name: 'Review',
    screen: 'home',
    icon: DrawerIcon.Review,
  },
  {
    id: '7',
    name: 'Settings',
    screen: 'home',
    icon: DrawerIcon.Setting,
  },
  {
    id: '8',
    name: 'Medical Records',
    screen: 'home',
    icon: DrawerIcon.Record,
  },
  {
    id: '9',
    name: 'Logout',
    screen: null,
    icon: DrawerIcon.Home,
  },
];
export default AppStack;
