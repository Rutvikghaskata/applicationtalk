import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabScreens} from '../../screens';
import CustomDrawer from '../../components/CustomDrawer';
import FindLocation from '../../screens/MainApp/BottomSheetScreens/SearchMap/FindLocation';

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
