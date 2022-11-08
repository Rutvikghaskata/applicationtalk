import {SafeAreaView } from 'react-native'
import React from 'react'
import { OnBoarding,Signup } from '../../screens'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
            />
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AuthStack