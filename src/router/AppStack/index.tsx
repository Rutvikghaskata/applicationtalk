import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabScreens} from '../../screens';
import CustomDrawer from '../../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="tab"
        screenOptions={{headerShown: false}}
        drawerContent={props => <CustomDrawer {...props} />}>
        {/* <Drawer.Screen name="tab" component={TabScreens} /> */}
      </Drawer.Navigator>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={TabScreens} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AppStack;
