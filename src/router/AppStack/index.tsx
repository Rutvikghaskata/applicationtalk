import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabScreens,SearchMap,FindLocation,MyAppointment} from '../../screens';
import CustomDrawer from '../../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="tab"
        screenOptions={{headerShown: false}}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="tab" component={TabScreens} />
        <Drawer.Screen name="findDoctor" component={FindLocation} />
        <Drawer.Screen name="searchMap" component={SearchMap} />
        <Drawer.Screen name="myAppointment" component={MyAppointment} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
